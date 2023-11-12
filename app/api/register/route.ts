import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.password || !body.email) {
    return NextResponse.json({error: "Fill all the fields"}, {
      status: 400,
    });
  }

  if (body.password.length < 8) {
    return NextResponse.json({error: "Password must be at least 8 characters long"}, {
      status: 400,
    });
  }

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({error: "Invalid username or email"}, {
      status: 400,
    });

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });
  const namedUser = await prisma.user.findFirst({
    where: {
      name: body.name,
    },
  });

  if (namedUser || user) {
    return NextResponse.json({error: "User already exists"}, {
      status: 400,
    });
  }
  if (namedUser) {
    return NextResponse.json({error: "This username is taken"}, {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword: hashedPassword,
      name: body.name,
    },
  });

  return NextResponse.json({ email: newUser.email, name: newUser.name });
}
