import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    console.error("FORMSPREE_ENDPOINT is not set in environment variables.");
    return NextResponse.json(
      { error: "Form endpoint not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: res.status }
    );
  }

  return NextResponse.json({ ok: true });
}
