"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    console.log(status)
    router.push('/profile')
  }
  console.log(status)
  return (
    <div className="flex max-w-5xl fade flex-col items-center text-center">
      <p className="text-white text-6xl font-bold font-mono">vilo.fun</p>
      <p className="text-transparent mt-4 from-cyan-200 via-cyan-400 to-cyan-700 text-xs font-bold bg-clip-text bg-gradient-to-r w-96">
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
          speed={70}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </p>
      <Link
        className="bg-[#16161D] flex flex-row hover:scale-110 transition-all hover:bg-opacity-100 hover:bg-transparent border-[#363642] hover:border-[2px] duration-200 mt-4 rounded-lg text-white items-center"
        href="/register"
      >
        <p className="font-bold flex flex-row items-center py-4 px-20">
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
    </div>
  );
};

export default Hero;
