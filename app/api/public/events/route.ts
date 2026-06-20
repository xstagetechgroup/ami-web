import { NextResponse } from 'next/server'

const BASE = 'https://ami-ml.vercel.app'

function fixUrls(obj: unknown): unknown {
  return JSON.parse(
    JSON.stringify(obj).replace(/"\/(api\/files|uploads)\//g, `"${BASE}/$1/`)
  )
}

export async function GET() {
  const res = await fetch(`${BASE}/api/public/events`, { next: { revalidate: 60 } })
  if (!res.ok) return NextResponse.json({ error: 'Failed to fetch events' }, { status: res.status })
  return NextResponse.json(fixUrls(await res.json()))
}
