import prisma from '@/prisma/client'

interface Socials {
  userId: string
  Instagram: string | null
}

interface User {
  id: string
  name: string | null
}

export const findUser = async (id: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        name: id,
      },
    })
    let isViewed
    console.log(typeof window)
    if (typeof window !== 'undefined') {
      console.log(typeof window)
      console.log(typeof window + 3)
      setTimeout(() => {
        console.log(typeof window)
      }, 5400)
      isViewed = localStorage.getItem('isVieved')
      if (!isViewed) {
        await prisma.user.update({
          where: {
            id: user!.id,
          },
          data: {
            viewsCount: {
              increment: 1,
            },
          },
        })
      }
    }

    /*await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        discordID: '964311233362800720',
        background: 'https://cdn.discordapp.com/attachments/981922767148552252/1174064410403274772/end-of-evangelion_1.png?ex=65663bb0&is=6553c6b0&hm=424ad8f2b07f5d123d0b024c52afd47c7fb746eccefdfc716eeae4a2e0ce8e19&',
      }
    })*/
    return user || null
  } catch (error) {
    console.error('Error in findUser:', error)
    throw error // Rethrow the error for the calling code to handle
  }
}

export const findSocials = async (userId: string): Promise<Socials> => {
  try {
    let socials = await prisma.socials.findFirst({
      where: {
        userId,
      },
    })

    if (!socials) {
      socials = await prisma.socials.create({
        data: {
          userId: userId!,
        },
      })
    }

    /* await prisma.socials.update({
      where: {
        id: socials.id
      },
      data: {
        YouTube: 'mirui'
      }
    }) */

    return socials as Socials
  } catch (error) {
    console.error('Error in findSocials:', error)
    throw error
  }
}
