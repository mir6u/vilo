import prisma from "@/prisma/client";

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
    await prisma.user.update({
      where: {
        id: user?.id,
      },
      data: {
        music:
          "https://cdn.discordapp.com/attachments/1127495096842080276/1178741274266845304/gesaffelstein-aleph-mp3.mp3?ex=65773f5b&is=6564ca5b&hm=79ca8dbef383b04372bde1ab6e3095d3977503a87ab41dc556c34dc0c3dfd816&",
      },
    });
    return user || null;
  } catch (error) {
    console.error("Error in findUser:", error);
    throw error; // Rethrow the error for the calling code to handle
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
    /*await prisma.socials.update({
      where: {
        id: socials.id,
      },
      data: {
        Discord: "977627340605628447",
        Telegram: "miruix",
      },
    });*/

    return socials as Socials;
  } catch (error) {
    console.error("Error in findSocials:", error);
    throw error;
  }
};
