"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  console.log(status);
  return (
    <div className="relative 100vh  100wv">
      <div className="flex max-w-5xl fade flex-col items-center  text-center">
        <p className="text-white text-6xl lg:text-8xl font-bold font-mono">yeh.lol</p>
        <p className="text-transparent mt-4 from-pink-300 via-cyan-400 to-purple-500 text-xs lg:text-base font-bold bg-clip-text bg-gradient-to-r w-96">
          <TypeAnimation
            sequence={[
              "Customise your profile!",
              1000,
              "Add your socials!",
              1000,
              "All for free.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
        <Link
          className="bg-[#16161D] flex flex-row hover:scale-110 transition-all hover:bg-opacity-100 hover:bg-transparent border-[#363642] hover:border-[2px] duration-200 mt-4 rounded-lg text-white items-center"
          href="/register"
        >
          <p className="font-bold text-base lg:text-xl flex flex-row items-center py-4 px-14 lg:px-20">
            Get Started
            <span className="ml-1">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </p>
        </Link>
        <div className="flex items-center justify-center flex-col">
          <div className="text-white">
            <div className="text-white m-4 font-mono">
              <p className="lg:text-6xl text-4xl">Users</p>
              <p className="text-xl lg:text-3xl">&#60;100</p>
            </div>
            <div className="text-white mb-4 font-mono">
              <p className="lg:text-6xl text-4xl">Links</p>
              <p className="text-xl lg:text-3xl">&#60;100</p>
            </div>
            <div className="text-white font-mono">
              <p className="lg:text-6xl text-4xl">Team</p>
              <p className="text-xl lg:text-3xl">1 Person</p>
            </div>
          </div>
        </div>
      </div>
      <p className="fixed text-xs lg:text-lg text-white translate-x-[-50%] left-[50%] bottom-3">
        © 2023 <span className="font-mono font-semibold ">yeh.lol</span> - All
        Rights Reserved.
      </p>
    </div>
  );
};

export default Hero;
