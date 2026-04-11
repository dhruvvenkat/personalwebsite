import { NextResponse } from "next/server";

type ApiNinjasQuote = {
  quote: string;
  author: string;
};

function normalizeQuoteText(value: string) {
  return value
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([,;:])(?=[A-Za-z"'“‘])/g, "$1 ")
    .replace(/([a-z0-9][.!?])(?=[A-Za-z"'“‘])/g, "$1 ")
    .replace(/(^|[.!?]\s+)(["'“‘([{]*)([a-z])/g, (_, prefix, opener, letter) => {
      return `${prefix}${opener}${letter.toUpperCase()}`;
    })
    .replace(/\bi\b/g, "I");
}

export async function GET() {
  const apiKey = process.env.API_NINJAS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing API_NINJAS_API_KEY." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom,inspirational,leadership",
      {
        cache: "no-store",
        headers: {
          "X-Api-Key": apiKey,
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          error:
            errorText || "Unable to fetch quote from API Ninjas right now.",
        },
        { status: response.status },
      );
    }

    const data = (await response.json()) as ApiNinjasQuote[];
    const quote = data[0];

    if (!quote) {
      return NextResponse.json(
        { error: "API Ninjas returned no quotes." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      content: normalizeQuoteText(quote.quote),
      author: quote.author,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch quote from API Ninjas right now." },
      { status: 500 },
    );
  }
}
