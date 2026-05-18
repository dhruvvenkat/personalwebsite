export type XProfileSummary = {
  name: string;
  username: string;
  profileImageUrl: string | null;
  followers: number;
  following: number;
  posts: number;
};

type XUserLookupResponse = {
  data?: {
    name?: string;
    username?: string;
    profile_image_url?: string;
    public_metrics?: {
      followers_count?: number;
      following_count?: number;
      tweet_count?: number;
    };
  };
};

const X_API_ENDPOINT = "https://api.x.com/2/users/by/username";
const CACHE_SECONDS = 60 * 60 * 6;

function getXBearerToken() {
  return (
    process.env.X_BEARER_TOKEN ??
    process.env.X_API_BEARER_TOKEN ??
    process.env.TWITTER_BEARER_TOKEN
  );
}

export async function getXProfileSummary(
  username: string,
): Promise<XProfileSummary | null> {
  const token = getXBearerToken();

  if (!token) {
    return null;
  }

  const params = new URLSearchParams({
    "user.fields": "profile_image_url,public_metrics",
  });

  try {
    const response = await fetch(
      `${X_API_ENDPOINT}/${username}?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: {
          revalidate: CACHE_SECONDS,
        },
      },
    );

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as XUserLookupResponse;
    const user = payload.data;

    if (!user?.name || !user.username) {
      return null;
    }

    return {
      name: user.name,
      username: user.username,
      profileImageUrl: user.profile_image_url ?? null,
      followers: user.public_metrics?.followers_count ?? 0,
      following: user.public_metrics?.following_count ?? 0,
      posts: user.public_metrics?.tweet_count ?? 0,
    };
  } catch {
    return null;
  }
}
