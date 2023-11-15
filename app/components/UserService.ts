import { serialize, parse } from 'cookie';
import prisma from "@/prisma/client";
import { IncomingMessage, ServerResponse } from 'http';

interface Socials {
  userId: string;
  Instagram: string | null;
  // Add other social properties as needed
}

interface User {
  id: string;
  name: string | null;
  // Add other user properties as needed
}

const incrementViewsCount = async (user: any): Promise<void> => {
  await prisma.user.update({
    where: {
      id: user!.id
    },
    data: {
      viewsCount: {
        increment: 1,
      },
    },
  });
};

export const findUser = async (id: string, req?: IncomingMessage, res?: ServerResponse): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        name: id,
      },
    });

    if (user) {
      const isViewedCookie = parse(req?.headers.cookie || '').isViewed === 'true';

      if (!isViewedCookie) {
        // Update views count only if isViewed is false
        await incrementViewsCount(user);

        // Set the isViewed cookie to true
        const cookie = serialize('isViewed', 'true', {
          maxAge: 365 * 24 * 60 * 60, // 1 year
          httpOnly: true,
          path: '/',
        });
        res?.setHeader('Set-Cookie', cookie);
      }
      
    }

    return user || null;
  } catch (error) {
    console.error("Error in findUser:", error);
    throw error;
  }
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

    return socials as Socials;
  } catch (error) {
    console.error("Error in findSocials:", error);
    throw error;
  }
};
