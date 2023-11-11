import React from "react";
import PlanSection from "../components/PlanSection";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const page = () => {
  return (
    <>
    <main className="flex lg:place-content-center min-h-screen  text-white flex-col items-center justify-between p-10">
      <div className="max-w-screen-2xl justify-center w-screen flex flex-col items-center">
        <div className="flex mb-8 justify-center items-center gap-2 max-w-4xl">
          <span className="h-5 w-5 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
          <p className="text-3xl lg:text-6xl font-mono font-bold">
            Vilo.Premium💎
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
