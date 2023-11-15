import React from "react";
import PlanSection from "../components/PlanSection";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <main className="flex lg:place-content-center min-h-screen  text-white flex-col items-center justify-between">
        <div className="max-w-screen-2xl justify-center w-screen flex flex-col items-center">
          <div className="flex mb-8 justify-center items-center gap-2 max-w-4xl">
            <span className="h-10 w-10 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
            <p className="text-4xl lg:text-8xl font-mono font-bold">
              Yeh.Premium💎
            </p>
          </div>
          <div className="w-full flex items-center justify-center ">
            <PlanSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
