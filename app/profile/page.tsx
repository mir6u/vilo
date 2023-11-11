import React from "react";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import "./styles.css";
import { authOptions } from "../api/auth/authOptions";
import Link from "next/link";
import ProfilePage from "../components/ProfilePage";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-20 text-white">
        {<ProfilePage />}
        <Link href={"/api/auth/signout"}>UwU</Link>
      </main>
    </>
  );
};

export default page;
