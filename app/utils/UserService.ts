import prisma from "@/prisma/client";
import cookie from "js-cookie";

interface Socials {
  userId: string;
  Instagram: string | null;
}

interface User {
  id: string;
  name: string | null;
}

export const findUser = async (id: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        name: id,
      },
    });
    return user || null;
  } catch (error) {
    console.error("Error in findUser:", error);
    throw error; // Rethrow the error for the calling code to handle
  }
  cookie.set("e", "e");
};

export const findSocials = async (userId: string): Promise<Socials> => {
  try {
    let socials = await prisma.socials.findFirst({
      where: {
        userId,
      },
    });

    if (!socials) {
      socials = await prisma.socials.create({
        data: {
          userId: userId!,
        },
      });
    }
    /* await prisma.socials.update({
      where: {
        id: socials.id
      },
      data: {
        YouTube: 'mirui'
      }
    }) */

    return socials as Socials;
  } catch (error) {
    console.error("Error in findSocials:", error);
    throw error;
  }
};
