import React from "react";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import "./styles.css";
import { authOptions } from "../api/auth/authOptions";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AuthProvider from "../auth/Provider";
import ProfilePage from "../components/ProfilePage";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
        <Sidebar />
        <main className="flex min-h-screen flex-col items-center p-20 text-white">
          {<ProfilePage/> || session!.user?.name}
          
          <Link href={"/api/auth/signout"}>UwU</Link>
        </main>
    </>
  );
};

export default page;
