// Import necessary dependencies
import React, { useEffect } from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import MainProfileWithSocials from "../components/MainProfileWithSocials";
import { findSocials, findUser } from "../components/UserService";

interface Props {
  params: { id: string };
}

const Page = ({ params: { id } }: Props) => {
  const fetchData = async () => {
    try {
      const user = await findUser(id);

      if (!user) {
        notFound();
        return;
      }

      const socials = await findSocials(user!.id);
      return <MainProfileWithSocials user={user} socials={socials} />;
    } catch (error) {
      console.error("Error in fetchData:", error);
    }
  };

  return fetchData();
};

export default Page;
