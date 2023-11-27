/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Props {
  className?: string;
}

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: status } = useSession()
  if (status === 'authenticated') {
    router.replace('/profile')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

  };

  return (
    <>
      <main className="flex min-h-screen p-10 flex-col items-center justify-center ">
        <form
          className="flex gap-3 bg-white p-10 rounded-lg flex-col"
          onSubmit={handleSubmit}
        >
          <p className="text-5xl flex justify-center mb-6 font-bold text-black">
            Reset Password
          </p>
          <div className="items-center w-full flex">
            <label
              className="text-black font-mono items-center gap-1 outline-none absolute  border-transparent hover:border-l-gray-300 font-semibold py-3 px-5 flex"
              htmlFor=""
            >
              <span className="h-3 w-3 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
              yeh.lol/
            </label>
            <input
              style={{
                WebkitAppearance: "none",
              }}
              type="email"
              className="pl-[6.7rem] lg:pl-[6.1rem] duration-300 w-full outline-none rounded-lg border-l-8 focus:border-l-cyan-500 border-transparent hover:border-l-gray-300 max-w-[500px] shadow-2xl font-light py-3 text-[#1a1a1a] text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              id="username"
            />
          </div>

          <p className="text-red-500 text-lg font-mono font-semibold">
            {error}
          </p>
          <button
            type="submit"
            className="text-white hover:bg-opacity-90 active:bg-opacity-80 bg-black py-4 rounded-xl font-mono text-xl"
          >
            Submit
          </button>
          <p className="text-black font-mono flex justify-center items-center">
            Back to&#160;
            <Link className="text-blue-400 hover:underline" href={"/register"}>
              login
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
