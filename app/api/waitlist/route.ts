import { NextResponse } from 'next/server'

import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Save email to database
    await prisma.waitlist.create({
      data: { email }
    })

    return NextResponse.json(
      { message: 'Email added to waitlist' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
