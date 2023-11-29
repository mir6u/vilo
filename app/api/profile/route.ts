import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request Body:", body); // Add this line for debugging

    const {
      username,
      displayName,
      discordID,
      music,
      background,
      bio,
      image,
      email,
    } = body;
    console.log(username);
    console.log(
      username,
      discordID,
      displayName,
      music,
      background,
      bio,
      image
    );
    const user = await prisma.user.findUnique({
      where: {
        name: username,
      },
    });
    if (user) {
      return NextResponse.json(
        { error: "This username is taken" },
        { status: 400 }
      );
    }
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: {
        name: username,
        displayName,
        discordID,
        music,
        background,
        bio,
        image,
      },
    });

    console.log("User Updated:", updatedUser); // Add this line for debugging

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error("Error:", error); // Add this line for debugging
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
