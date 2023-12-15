import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const doc_url = url.searchParams.get("doc_url");

  if (!doc_url) {
    return NextResponse.json(
      { success: false, data: [] },
      {
        status: 500,
      }
    );
  }

  const blob = await fetch(doc_url, {
    method: "GET",
  }).then((res) => {
    return res.blob();
  });

  const objectURL = URL.createObjectURL(blob);

  return NextResponse.json(
    { success: true, data: objectURL },
    {
      status: 200,
    }
  );
}
