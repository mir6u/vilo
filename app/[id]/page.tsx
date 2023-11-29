import React, { useEffect } from "react";
import { notFound } from "next/navigation";
import MainProfileWithSocials from "../components/MainProfileWithSocials";
import { findSocials, findUser } from "../utils/UserService";


interface Props {
  params: { id: string };
}


const Page = async ({ params: { id } }: Props) => {

  const user = await findUser(id);


  if (!user) {
    notFound();
    return;
  }

  const socials = await findSocials(user!.id);
  return <MainProfileWithSocials user={user} socials={socials} />;
}

export default Page;

