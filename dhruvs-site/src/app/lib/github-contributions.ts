export type GitHubContributionDay = {
  date: string;
  count: number;
  color: string;
  level: string;
};

export type GitHubContributionWeek = {
  days: Array<GitHubContributionDay | null>;
};

export type GitHubContributionSummary = {
  weeks: GitHubContributionWeek[];
  totalContributions: number;
  recentContributions: number;
};

type GraphQLContributionDay = {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
  weekday: number;
};

type GraphQLContributionWeek = {
  contributionDays: GraphQLContributionDay[];
};

type GitHubContributionResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: GraphQLContributionWeek[];
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
const RECENT_WEEK_COUNT = 10;
const CACHE_SECONDS = 60 * 60 * 6;

const contributionCalendarQuery = `
  query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

function getGitHubToken() {
  return process.env.GITHUB_CONTRIBUTIONS_TOKEN ?? process.env.GITHUB_TOKEN;
}

function normalizeWeek(week: GraphQLContributionWeek): GitHubContributionWeek {
  const days: GitHubContributionWeek["days"] = Array.from({ length: 7 }, () => null);

  for (const day of week.contributionDays) {
    days[day.weekday] = {
      date: day.date,
      count: day.contributionCount,
      color: day.color,
      level: day.contributionLevel,
    };
  }

  return { days };
}

export async function getGitHubContributionSummary(
  login: string,
): Promise<GitHubContributionSummary | null> {
  const token = getGitHubToken();

  if (!token) {
    return null;
  }

  const to = new Date();
  const from = new Date(to);
  from.setDate(from.getDate() - 370);

  try {
    const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: contributionCalendarQuery,
        variables: {
          login,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      next: {
        revalidate: CACHE_SECONDS,
      },
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as GitHubContributionResponse;

    if (payload.errors?.length) {
      return null;
    }

    const calendar =
      payload.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return null;
    }

    const weeks = calendar.weeks.slice(-RECENT_WEEK_COUNT).map(normalizeWeek);
    const recentContributions = weeks.reduce(
      (sum, week) =>
        sum +
        week.days.reduce((weekSum, day) => weekSum + (day?.count ?? 0), 0),
      0,
    );

    return {
      weeks,
      totalContributions: calendar.totalContributions,
      recentContributions,
    };
  } catch {
    return null;
  }
}
