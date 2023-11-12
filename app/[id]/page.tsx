import React, { useEffect } from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import SocialsComponent from "../components/SocialsComponent";
import MainProfile from "../components/MainProfile";
import Link from "next/link";
import SocialsSection from "../components/SocialsSection";

interface Props {
  params: { id: string };
}

const page = async ({ params: { id } }: Props) => {
  const user = await prisma.user.findUnique({
    where: {
      name: id,
    },
  });
  if (!user) {
    notFound();
  }
  const socials = await prisma.socials.findFirst({
    where: {
      userId: user.id
    }
  });
  console.log(socials?.Instagram || 'e')
  
  console.log(user.id)
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body
          className=""
          style={{
            backgroundSize: "100vw 100vh",
            backgroundImage: `url(https://cdn.discordapp.com/attachments/1127495096842080276/1173338416377770075/han-tokyodrift.gif?ex=6563978e&is=6551228e&hm=2f32b3fe3132dc34b0f78196c85be9c0eb1b1a5cba333b2d617abd0fea6b69e8&)`,
          }}
        >
          <main className="relative w-full h-full px-4 py-16 table">
            <div className=" align-middle text-center">
              <div className=" rounded-md shadow-4xl  w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px] mt-14">
                <MainProfile bio={user.bio} user={user} />
                <SocialsSection socials={socials}/>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
};

export default page;
