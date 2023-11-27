import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-white font-mono font-bold text-3xl flex flex-col items-center justify-center w-screen h-screen">
      <span className="mb-5 text-4xl">Error 404</span>
      This user does not exists
      <span className="text-lg mt-5">
        Back to{" "}
        <Link href={"/"} className="text-blue-400 hover:underline">
          home page
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
