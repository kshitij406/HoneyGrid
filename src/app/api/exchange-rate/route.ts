// Fetches MUR → USD exchange rate.
// Attempts MCB Mauritius first; falls back to open.er-api.com if unavailable.
// Cached for 1 hour server-side to avoid hammering the upstream source.

export const revalidate = 3600;

async function fetchMcbRate(): Promise<number | null> {
  try {
    // MCB publishes rates as JSON at this endpoint (may change — monitored)
    const res = await fetch("https://www.mcb.mu/mcbapi/rates", {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    // MCB response structure: array of { currency, buyRate, sellRate }
    const usdEntry = Array.isArray(data)
      ? data.find(
          (r: { currency?: string }) =>
            r.currency?.toUpperCase() === "USD"
        )
      : null;
    if (!usdEntry?.sellRate) return null;
    // sellRate is USD per MUR from bank perspective; we want MUR per USD
    // MCB quotes how many MUR you need to buy 1 USD, so sellRate = MUR/USD
    const murPerUsd = parseFloat(usdEntry.sellRate);
    if (!isFinite(murPerUsd) || murPerUsd <= 0) return null;
    return 1 / murPerUsd; // convert to USD per MUR
  } catch {
    return null;
  }
}

async function fetchFallbackRate(): Promise<number> {
  const res = await fetch("https://open.er-api.com/v6/latest/MUR", {
    signal: AbortSignal.timeout(5000),
  });
  if (!res.ok) throw new Error("Exchange rate fetch failed");
  const data = await res.json();
  const usdPerMur = data?.rates?.USD;
  if (!usdPerMur) throw new Error("USD rate missing in response");
  return usdPerMur;
}

export async function GET() {
  try {
    let usdPerMur = await fetchMcbRate();
    const source = usdPerMur ? "mcb" : "open.er-api";
    if (!usdPerMur) {
      usdPerMur = await fetchFallbackRate();
    }
    return Response.json({ usdPerMur, source });
  } catch {
    return Response.json(
      { error: "Could not fetch exchange rate" },
      { status: 503 }
    );
  }
}
