import { useEffect, useState } from "react";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function getSocials({ params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      name: id,
    },
  });

  let socials = await prisma.socials.findFirst({
    where: {
      userId: user!.id,
    },
  });

  if (!socials) {
    socials = await prisma.socials.create({
      data: {
        userId: user!.id,
      },
    });
  }

  const obj = {
    user: user,
    socials: socials,
  };

  return obj;
}