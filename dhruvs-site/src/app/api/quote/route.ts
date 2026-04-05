import { NextResponse } from "next/server";

type ApiNinjasQuote = {
  quote: string;
  author: string;
};

export async function GET() {
  const apiKey = process.env.API_NINJAS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing API_NINJAS_API_KEY." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      cache: "no-store",
      headers: {
        "X-Api-Key": apiKey,
      },
    });

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
      content: quote.quote,
      author: quote.author,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch quote from API Ninjas right now." },
      { status: 500 },
    );
  }
}
