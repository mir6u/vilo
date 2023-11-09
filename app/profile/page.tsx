import React from "react";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import './styles.css'
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between p-20 text-white">
        {session?.user?.name}
        <Link href={'/api/auth/signout'}>UwU</Link>
      </main>
    </>
  );
};

export default page;
