// Proxy for the signup-request form. Forwards to the dvoice backend server-side
// so the browser never makes a cross-origin POST (no CORS dance).
const UPSTREAM = "https://dvoice.uz/api/signup-requests";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  try {
    const res = await fetch(UPSTREAM, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") ?? "application/json" },
    });
  } catch {
    return Response.json({ error: "upstream unreachable" }, { status: 502 });
  }
}
