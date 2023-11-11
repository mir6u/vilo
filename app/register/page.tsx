"use client";
import React, { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Please fill all the fields");
      return error;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return error;
    }

    try {
      await axios.post("/api/register", { email, password, name });
      console.log("Registration successful");
      signIn("credentials", {
        email,
        password,
        name,
        callbackUrl: "http://localhost:3000/profile",
      })
      .then(function (response: any) {
        setError(response)
      })
    } catch (error: any) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-20">
        <form
          className="flex gap-3 bg-white p-10 rounded-lg flex-col"
          onSubmit={handleSubmit}
        >
          <p className="text-5xl flex justify-center mb-10 font-bold text-black">Create Account</p>
          <div className="items-center w-full flex">
            <label
              className="text-black font-mono items-center gap-1 outline-none absolute  border-transparent hover:border-l-gray-300 font-semibold py-3 px-5 flex"
              htmlFor=""
            >
              <span className="h-3 w-3 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
              vilo.fun/
            </label>
            <input
              required
              type="text"
              className="px-[6.7rem] duration-300 w-full outline-none rounded-lg border-l-8 focus:border-l-cyan-500 border-transparent hover:border-l-gray-300 max-w-[500px] shadow-2xl font-light py-3 text-[#1a1a1a] text-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="username"
              id="username"
            />
          </div>
          <input
            required
            className="px-2 outline-none duration-300 rounded-lg border-l-8 focus:border-l-purple-300 border-transparent hover:border-l-gray-300 max-w-[500px] shadow-2xl
             font-light py-3 text-[#1a1a1a] text-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <div className="flex  gap-3 flex-col lg:flex-row ">
            <input
              className="px-3 lg:max-w-[240px] outline-none rounded-lg duration-300 border-l-8 shadow-2xl focus:border-l-blue-600 border-transparent hover:border-l-gray-300 max-w-[500px] font-light py-3 text-[#1a1a1a] text-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
            />
            <input
              className="px-3 lg:max-w-[240px]  outline-none rounded-lg duration-300 border-l-8 focus:border-l-blue-600 border-transparent hover:border-l-gray-300 shadow-2xl font-light py-3 text-[#1a1a1a] text-lg"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your passowrd"
            />
          </div>

          <p className="text-white">{error}</p>
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
          <button type="submit" className="text-white bg-black py-4 rounded-xl font-mono text-xl">
            Register
          </button>
          <p className="text-black flex justify-center items-center">Already have an account?&#160;<Link className="text-blue-400" href={'/signin'}>Sign In</Link></p>
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
