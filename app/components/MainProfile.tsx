"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import './components.css'


interface MainProfileProps {
  user: any;
}

const MainProfile = ({ user }: MainProfileProps) => {
  return (
    <div className="p-10 mb-14 main rounded-lg shadow-black shadow-md bg-[#16161D] flex flex-col items-center justify-center ">
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
            className="text-2xl mt-3 text-white font-semibold"
            style={{
              backgroundImage: `url('https://media.discordapp.net/attachments/987149728800198686/991834200309248070/sparkle.gif')`,
              filter: `drop-shadow(15px 15px 15px white)`,
              color: "white",
            }}
          >
            {user?.displayName ? user.displayName : user.name}
          </h2>
          <audio id="music" src={user.music}></audio>
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
          className="text-xs text-white font-semibold gap-1 flex flex-row items-center justify-center"
        >
          <span className="h-3 w-3  font-semibold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
          yeh.lol/{user?.name}
        </Link>
      </div>
      <div className="text-white gap-2 items-center flex text-xs">
        <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          width="15px" height="15px" viewBox="0 0 442.04 442.04"
          xmlSpace="preserve">
          <g>
            <g>
              <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
			c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
			c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
			c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
			c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
			c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
			c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
            </g>
            <g>
              <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
			c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
			c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
			s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
            </g>
            <g>
              <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
            </g>
          </g>
        </svg>
        {user?.viewsCount}
      </div>
      <div className="not-last-child:mb-8">
        <div className="mx-auto max-w-[750px]">
          <p className="text-[#798080] text-sm mt-8 font-bold bg-clip-text bg-gradient-to-r">
            <TypeAnimation
              sequence={[
                user?.bio,
                7000,
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
