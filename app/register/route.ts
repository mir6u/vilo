import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z, { number } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {status: 400})
  }
  await prisma.user.findUnique
}