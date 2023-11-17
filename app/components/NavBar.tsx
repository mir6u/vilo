'use client'
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="hidden fade bg-black lg:bg-transparent justify-between items-center p-3 lg:flex">
      <div>
        <Link href={"/"}>
          <p className="text-2xl font-bold font-mono text-white flex items-center gap-4">
            <span className="h-4 w-4 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
            Yeh
          </p>
        </Link>
      </div>
      <div className="flex flex-row text-lg font-semibold font-mono gap-5 text-white">
        {status === 'authenticated' ? <Link href={'/api/auth/signout'}>Sign Out</Link> : <>
          <Link href={'signin'}>Log In</Link>
          <Link href={'/register'}>Sign Up</Link>
        </>}
      </div>
    </div>
  );
};

export default NavBar;

