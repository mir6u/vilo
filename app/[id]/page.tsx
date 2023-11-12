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
      userId: user.id,
    },
  });
  console.log(socials?.Instagram || "e");

  console.log(user.id);
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
        <body className="h-full">
          <div
            style={{
              backgroundSize: "cover",
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(https://cdn.discordapp.com/attachments/1101980164226809897/1173363092613251174/jet.gif?ex=6563ae89&is=65513989&hm=1c81e0436078759ae09af79858d431a2b416f293844cba822090e98c0b697208&)`,
            }}
            className="absolute inset-0"
          ></div>
          <main className="relative  w-full h-full px-4 py-16 table">
            <div className=" align-middle text-center">
              <div className=" rounded-md shadow-4xl  w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px] mt-14">
                <MainProfile bio={user.bio} user={user} />
                <SocialsSection socials={socials} />
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
};

export default page;
