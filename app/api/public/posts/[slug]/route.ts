import { NextRequest, NextResponse } from 'next/server'

const BASE = 'https://ami-ml.vercel.app'

function fixUrls(obj: unknown): unknown {
  return JSON.parse(
    JSON.stringify(obj).replace(/"\/(api\/files|uploads)\//g, `"${BASE}/$1/`)
  )
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const { searchParams } = new URL(request.url)
  const qs = searchParams.toString()
  const res = await fetch(`${BASE}/api/public/posts/${slug}${qs ? `?${qs}` : ''}`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) return NextResponse.json({ error: 'Post not found' }, { status: res.status })
  return NextResponse.json(fixUrls(await res.json()))
}
