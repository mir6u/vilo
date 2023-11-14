"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

interface MainProfileProps {
  user: any;
}

const MainProfile = ({ user }: MainProfileProps) => {
  console.log(user.image, 'e')
  return (
    <div className="p-10 mb-14 rounded-lg shadow-black shadow-xl bg-[#282b30] flex flex-col items-center justify-center ">
      <div className="not-last-child:mb-10">
        <div className="-mt-[90px]">
          <Image
            className="rounded-full border border-black shadow-xl shadow-black"
            width={180}
            height={180}
            src={user.image ? user.image : ''}
            title="Image"
            alt="Image"
            draggable="false"
          />{" "}
        </div>
      </div>
      <div className="not-last-child:mb-8">
        <div className="justify-center  items-center flex  ">
          <h2
            className="text-3xl mt-3 text-white font-semibold"
            style={{
              backgroundImage: `url('https://media.discordapp.net/attachments/987149728800198686/991834200309248070/sparkle.gif')`,
              filter: `drop-shadow(10px 10px 10px #ffffff)`,
              color: "white",
            }}
          >
            {user?.name || user?.displayName}
          </h2>
          {/* <span className="cursor-pointer text-xl" title="Verified">
                        <div className="verified-icon">
                          <Image
                            alt="img"
                            height={15}
                            src=""
                            width={15}
                            className=""
                            style={{
                              position: "relative",
                              height: "15px",
                              left: "15%",
                            }}
                          />
                        </div>
                      </span>
                      <span className="cursor-pointer text-xl" title="Premium">
                        <div className="premium">
                          <Image
                            width={12}
                            alt="icon"
                            height={12}
                            src=""
                            className="verified-icon-image verified-icon-image-dark"
                            style={{ height: "12px", left: "60%" }}
                          />
                        </div>
                          </span> */}
        </div>
        <Link
          href={`/${user?.name}`}
          className="text-lg text-white font-semibold gap-1 flex flex-row items-center justify-center"
        >
          <span className="h-3 w-3 text-xs font-semibold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
          vilo.fun/{user?.name}
        </Link>
      </div>
      <div className="not-last-child:mb-8">
        <div className="mx-auto max-w-[750px]">
          <p className="text-[#798080] text-xl font-bold bg-clip-text bg-gradient-to-r">
            <TypeAnimation
              sequence={[
                user?.bio,
                3000,
                '',
                100,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>
      {user?.discordID && (
        <div className="flex justify-center items-center space-x-2">
          <div className="text-center">
            <Link
              href={`https://discord.com/users/${user?.discordID}`}
              target="_blank"
            >
              <Image
                alt="img"
                height={300}
                src={`https://discord.c99.nl/widget/theme-4/${user?.discordID}.png`}
                width={300}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainProfile;
