"use client";
import React, { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import "../globals.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()
  const { status, data: session } = useSession();
  if (status === 'authenticated') {
    router.push('/profile')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
      }).then(function (response: any) {
        setError(response);
      });
    } catch (error: any) {
      console.error(
        "Registration failed:",
        error,
        error.response.data.response
      );
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <Sidebar />
      <NavBar />
      <main
        style={{
          WebkitAppearance: "none",
        }}
        className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-20"
      >
        <form
          style={{
            WebkitAppearance: "none",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            WebkitBoxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            MozBoxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
          className="flex gap-3 bg-white p-8 rounded-2xl lg:rounded-lg flex-col"
          onSubmit={handleSubmit}
        >
          <p className="text-5xl  flex justify-center mb-6 font-bold text-black">
            Create Account
          </p>
          <div
            onClick={() => {
              signIn("google", {
                callbackUrl: `http://localhost:3000`,
              });
            }}
            style={{
              WebkitAppearance: "none",
            }}
            className="items-center gap-3 duration-300 w-full shadow-gray-400 max-w-full shadow-2xl font-light py-3 text-[#1a1a1a] bg-gray-100 text-lg rounded-full justify-center flex"
          >
            <div>
              <svg
                width="25px"
                height="25px"
                viewBox="-3 0 262 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>
            </div>
            <div className="text-xl font-bold ">Sign Up with Google</div>
          </div>
          <hr className="border-t-4 border-gray-500 rounded-full mb-2" />
          <div className="inputs flex gap-3 bg-white flex-col">
            <div className="items-center w-full flex">
              <label
                className="text-black font-mono items-center gap-1 outline-none absolute border-transparent hover:border-l-gray-300 font-semibold py-3 px-5 flex"
                htmlFor=""
              >
                <span className="h-3 w-3 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
                yeh.lol/
              </label>
              <input
                style={{
                  WebkitAppearance: "none",
                }}
                type="text"
                className="pl-[6.7rem] lowercase lg:pl-[6.1rem] duration-300 w-full outline-none rounded-lg border-l-8 focus:border-l-cyan-500 border-transparent hover:border-l-gray-300 max-w-full shadow-lg font-light py-3 text-[#1a1a1a] text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
                id="username"
              />
            </div>

            <input
              style={{
                WebkitAppearance: "none",
              }}
              className="px-2 box-border lowercase outline-none duration-300 rounded-lg border-l-8 focus:border-l-purple-300 border-transparent hover:border-l-gray-300 max-w-full shadow-lg font-light py-3 text-[#1a1a1a] text-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <div className="flex  gap-3 flex-col lg:flex-row ">
              <input
                style={{
                  WebkitAppearance: "none",
                }}
                className="px-3 box-border lg:max-w-[240px] outline-none rounded-lg duration-300 border-l-8 shadow-lg focus:border-l-blue-600 border-transparent hover:border-l-gray-300 max-w-full font-light py-3 text-[#1a1a1a] text-lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
              />
              <input
                style={{
                  WebkitAppearance: "none",
                }}
                className="px-3 box-border lg:max-w-[240px] outline-none rounded-lg duration-300 border-l-8 shadow-lg focus:border-l-blue-600 border-transparent hover:border-l-gray-300 max-w-full font-light py-3 text-[#1a1a1a] text-lg"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your passowrd"
              />
            </div>
          </div>

          <p className="text-red-500 text-lg font-mono font-semibold">
            {error}
          </p>
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
            className="text-white bg-black py-4 rounded-xl font-mono text-xl hover:bg-opacity-90 active:bg-opacity-80"
          >
            Register
          </button>
          <p className="text-black flex justify-center items-center ">
            Already have an account?&#160;
            <Link className="text-blue-400" href={"/signin"}>
              Sign In
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
