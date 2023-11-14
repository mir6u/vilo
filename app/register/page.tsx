"use client";
import React, { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import "../globals.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

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
          <p className="text-5xl  flex justify-center mb-10 font-bold text-black">
            Create Account
          </p>
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
                className="pl-[6.7rem] lg:pl-[6.1rem] duration-300 w-full outline-none rounded-lg border-l-8 focus:border-l-cyan-500 border-transparent hover:border-l-gray-300 max-w-full shadow-lg font-light py-3 text-[#1a1a1a] text-lg"
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
              className="px-2 box-border outline-none duration-300 rounded-lg border-l-8 focus:border-l-purple-300 border-transparent hover:border-l-gray-300 max-w-full shadow-lg font-light py-3 text-[#1a1a1a] text-lg"
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
