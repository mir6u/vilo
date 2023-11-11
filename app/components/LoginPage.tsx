/* eslint-disable react/no-unescaped-entities */
"use client";
import axios from "axios";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

interface Props {
  className?: string;
}

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all the fields");
      return;
    }

    const response: any = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setError(response?.error)
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <form
        className="flex gap-3 bg-white p-10 rounded-lg flex-col"
        onSubmit={handleSubmit}
      >
        <p className="text-5xl flex justify-center mb-10 font-bold text-black">
          Welcome back!
        </p>
        <div className="items-center w-full flex">
          <label
            className="text-black font-mono items-center gap-1 outline-none absolute  border-transparent hover:border-l-gray-300 font-semibold py-3 px-5 flex"
            htmlFor=""
          >
            <span className="h-3 w-3 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
            vilo.fun/
          </label>
          <input
            type="email"
            className="px-[6.7rem] duration-300 w-full outline-none rounded-lg border-l-8 focus:border-l-cyan-500 border-transparent hover:border-l-gray-300 max-w-[500px] shadow-2xl font-light py-3 text-[#1a1a1a] text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            id="username"
          />
        </div>
        <input
          className="px-2 outline-none duration-300 rounded-lg border-l-8 focus:border-l-purple-300 border-transparent hover:border-l-gray-300 max-w-[500px] shadow-2xl
             font-light py-3 text-[#1a1a1a] text-lg"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <p className="text-red-500 text-lg font-mono font-semibold">{error}</p>
        <p className="text-sm font-light font-mono text-black">
          By clicking you agree to our{" "}
          <Link className="text-blue-400" href={"/tos"}>
            Terms of service
          </Link>{" "}
          and{" "}
          <Link className="text-blue-400" href={"/privacy"}>
            Privacy Policy
          </Link>
        </p>
        <button
          type="submit"
          className="text-white hover:bg-opacity-80 active:bg-opacity-90 bg-black py-4 rounded-xl font-mono text-xl"
        >
          Log In
        </button>
        <p className="text-black flex justify-center items-center">
          Don't an account?&#160;
          <Link className="text-blue-400" href={"/register"}>
            Sign up!
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
