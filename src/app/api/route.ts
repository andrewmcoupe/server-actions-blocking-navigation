import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  // wait for 10 seconds before sending back the body
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return NextResponse.json(body);
}
