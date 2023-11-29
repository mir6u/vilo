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
    /*await prisma.user.update({
      where: {
        name: "v",
      },
      data: {
        music:
          "https://cdn.discordapp.com/attachments/1127495096842080276/1178788331551727616/Busic.net_HOME-Resonance_Original_Mix.mp3?ex=65776b2f&is=6564f62f&hm=50fd1c1f29c7f9dd6eb5dbe70584cf4f9fe8f1906ae5813923b162f0b4dcb6e9&",
      },
    });*/
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
