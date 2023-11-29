"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import SidebarMobileButton from "./SidebarMobileButton";
import LGButton from "./LGButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import DashButton from "./DashButton";
import MainProfileWithSocials from "./MainProfileWithSocials";
import prisma from "@/prisma/client";
import { findSocials, findUser } from "../utils/UserService";
import Link from "next/link";
import DashEditInput from "./DashEditInput";
import DashboardUser from "./DashboardUser";
import axios from "axios";
import { signOut } from "next-auth/react";

const DashSidebar = ({ user, socials }: any) => {
  const [isGeneral, setIsGeneral] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [name, setName] = useState(user.name || null);
  const [email, setEmail] = useState(user.email || null)
  const [displayName, setDisplayName] = useState(user.displayName || null);
  const [discordID, setDiscordID] = useState(user.discordID || null);
  const [music, setMusic] = useState(user.music || null);
  const [background, setBackground] = useState(user.background || null);
  const [bio, setBio] = useState(user.bio || null);
  const [image, setImage] = useState(user.image || null);
  const [route, setRoute] = useState();
  const { status, data: session } = useSession();
  const router = useRouter()
  if (status === 'unauthenticated') {
    router.push('/register')
  }
  const buttons = [
    {
      key: 1,
      pathname: isGeneral,
      svg: (
        <svg
          key={1}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 48 48"
          width="25px"
          height="25px"
        >
          <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
        </svg>
      ),
      label: "Home",
      isRight: true,
      isBordering: false,
      onClick: () => {
        setIsEdit(false)
        setIsGeneral(true)
        setIsInfo(false)
      }
    },

    {
      key: 3,
      pathname: isEdit,
      svg: (
        <svg
          key={4}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24.000000 24.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M22 218 c-16 -16 -16 -160 0 -176 14 -14 88 -16 88 -2 0 6 -18 10
  -40 10 l-40 0 0 55 0 55 90 0 c73 0 90 -3 90 -15 0 -8 5 -15 10 -15 14 0 12
  74 -2 88 -16 16 -180 16 -196 0z m188 -23 c0 -12 -17 -15 -90 -15 -73 0 -90 3
  -90 15 0 12 17 15 90 15 73 0 90 -3 90 -15z"
            />
            <path d="M48 193 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
            <path
              d="M156 79 c-60 -65 -33 -93 33 -34 34 31 39 40 30 56 -14 27 -22 24
  -63 -22z m54 11 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0
  10 -4 10 -10z m-39 -43 c-11 -12 -24 -18 -27 -14 -10 10 27 48 38 41 6 -4 1
  -16 -11 -27z"
            />
          </g>
        </svg>
      ),
      label: "Edit",
      isRight: false,
      isBordering: false,
      onClick: () => {
        setIsEdit(true)
        setIsGeneral(false)
        setIsInfo(false)
      }
    },
    {
      key: 2,
      pathname: isInfo,
      svg: (
        <svg
          key={3}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M2429 4347 c-64 -27 -103 -53 -140 -94 -14 -15 -187 -275 -384 -578
  -197 -302 -363 -555 -369 -562 -8 -9 -69 21 -256 128 -376 214 -375 214 -489
  214 -85 0 -103 -3 -153 -28 -124 -61 -198 -168 -206 -297 -4 -71 7 -120 192
  -875 118 -483 203 -810 214 -825 10 -14 38 -35 62 -48 l44 -22 1616 0 1616 0
  44 23 c24 12 52 33 62 47 11 15 96 342 214 825 178 728 196 806 192 870 -12
  220 -228 378 -446 325 -32 -7 -165 -77 -349 -180 -227 -129 -301 -166 -309
  -157 -6 7 -172 260 -369 562 -197 303 -373 567 -393 587 -19 20 -62 51 -96 69
  -54 29 -72 33 -151 36 -77 3 -98 0 -146 -20z m581 -926 c228 -349 427 -643
  442 -654 14 -11 48 -22 75 -24 57 -6 49 -10 485 238 163 93 305 169 316 169
  23 0 52 -25 52 -44 0 -11 -333 -1377 -346 -1418 -5 -17 -84 -18 -1474 -18
  -1390 0 -1469 1 -1474 18 -13 41 -346 1407 -346 1418 0 19 29 44 52 44 11 0
  180 -91 376 -202 348 -198 358 -203 414 -203 42 0 64 5 85 21 15 11 140 191
  276 400 643 982 583 896 619 892 31 -3 50 -30 448 -637z"
            />
            <path
              d="M1020 1028 c-51 -35 -72 -69 -72 -120 -1 -55 25 -104 72 -135 l33
  -23 1506 0 c1475 0 1507 0 1538 20 89 54 102 166 29 239 l-36 36 -1519 3
  -1518 2 -33 -22z"
            />
          </g>
        </svg>
      ),
      label: "Info",
      isRight: true,
      isBordering: false,
      onClick: () => {
        setIsEdit(false)
        setIsGeneral(false)
        setIsInfo(true)
      }
    },
    {
      key: 2,
      pathname: isInfo,
      svg: (
        <svg
          key={3}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M2429 4347 c-64 -27 -103 -53 -140 -94 -14 -15 -187 -275 -384 -578
  -197 -302 -363 -555 -369 -562 -8 -9 -69 21 -256 128 -376 214 -375 214 -489
  214 -85 0 -103 -3 -153 -28 -124 -61 -198 -168 -206 -297 -4 -71 7 -120 192
  -875 118 -483 203 -810 214 -825 10 -14 38 -35 62 -48 l44 -22 1616 0 1616 0
  44 23 c24 12 52 33 62 47 11 15 96 342 214 825 178 728 196 806 192 870 -12
  220 -228 378 -446 325 -32 -7 -165 -77 -349 -180 -227 -129 -301 -166 -309
  -157 -6 7 -172 260 -369 562 -197 303 -373 567 -393 587 -19 20 -62 51 -96 69
  -54 29 -72 33 -151 36 -77 3 -98 0 -146 -20z m581 -926 c228 -349 427 -643
  442 -654 14 -11 48 -22 75 -24 57 -6 49 -10 485 238 163 93 305 169 316 169
  23 0 52 -25 52 -44 0 -11 -333 -1377 -346 -1418 -5 -17 -84 -18 -1474 -18
  -1390 0 -1469 1 -1474 18 -13 41 -346 1407 -346 1418 0 19 29 44 52 44 11 0
  180 -91 376 -202 348 -198 358 -203 414 -203 42 0 64 5 85 21 15 11 140 191
  276 400 643 982 583 896 619 892 31 -3 50 -30 448 -637z"
            />
            <path
              d="M1020 1028 c-51 -35 -72 -69 -72 -120 -1 -55 25 -104 72 -135 l33
  -23 1506 0 c1475 0 1507 0 1538 20 89 54 102 166 29 239 l-36 36 -1519 3
  -1518 2 -33 -22z"
            />
          </g>
        </svg>
      ),
      label: "Log out",
      isRight: true,
      isBordering: false,
      onClick: () => {

      }
    },
  ];
  return (
    <>
      <div className="flex flex-row text-white h-screen lg:block">
        <div className="flex h-full flex-row items-center justify-center "> {/* New container div with flex property */}
          <aside className="min-w-[80px] h-full max-w-[80px] z-3  shadow-black shadow-2xl bg-[#35353e] items-center p-6 text-white border justify-center flex flex-col border-slate-100/5 gap-5">
            {buttons.map((button, index) => (
              <DashButton
                onClick={button.onClick}
                key={index}
                label={button.label}
                pathname={button.pathname}
                svg={button.svg}
                isBordering={button.isBordering}
              />
            ))}
          </aside>
          {isGeneral && <div className="flex h-full p-5 flex-col max-w-[400px] min-w-[400px] bg-[#51515a] text-white ">
            <div className="text-2xl font-bold font-mono mb-6">YEH.LOL</div>
            <div className="flex flex-col text-lg font-semibold">
              Socials
              <div className="flex-col flex p-3 gap-3 text-xl font-mono   ">
                <Link href={"https://discord.gg/Zy7Jddumcf"}>
                  <div className="flex flex-row items-center bg-[#35353e] p-6 rounded-lg cursor-pointer hover:bg-opacity-70 gap-3">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> <p>Discord</p>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="flex flew-row items-center bg-[#35353e] rounded-lg cursor-pointer hover:bg-opacity-70 p-6 gap-3">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> <p>Telegram</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="font-mono font-bold mt-5 text-lg">If you have any problems, DM @mir6u on Discord</div>
          </div>}
          {isEdit && <div className="flex h-full p-5 flex-col max-w-[400px] min-w-[400px] bg-[#51515a] text-white ">
            <div className="text-2xl font-bold font-mono mb-6">Your Profile</div>
            <div className="flex flex-col text-lg font-semibold">
              <div className="">
                <Link href={`${session?.user?.name}`} className="inline-flex ml-3 hover:bg-opacity-70  items-center bg-[#797985] px-4 py-3 rounded-md">
                  yeh.lol/{session?.user?.name}
                </Link>
              </div>

              <div className="flex-col flex p-3 gap-3 text-xl font-mono   ">
                <DashEditInput email={email} background={background} bio={bio} music={music} image={image} discordID={discordID} username={name} displayName={displayName} setValue={setName} icon={<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} value={name} name={"Name"} />
                <DashEditInput email={email} background={background} bio={bio} music={music} image={image} discordID={discordID} username={name} displayName={displayName} setValue={setDisplayName} icon={<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} value={displayName} name={"Display Name"} />
                <DashEditInput email={email} background={background} bio={bio} music={music} image={image} discordID={discordID} username={name} displayName={displayName} setValue={setBio} icon={<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} value={bio} name={"Bio"} />
                <DashEditInput email={email} background={background} bio={bio} music={music} image={image} discordID={discordID} username={name} displayName={displayName} setValue={setImage} icon={<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} value={image} name={"Profile Picture URL"} />
                <DashEditInput email={email} background={background} bio={bio} music={music} image={image} discordID={discordID} username={name} displayName={displayName} setValue={setBackground} icon={<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} value={background} name={"Background Image URL"} />
                <DashEditInput email={email} background={background} bio={bio} music={music} image={image} discordID={discordID} username={name} displayName={displayName} setValue={setMusic} icon={<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} value={music} name={"Background Music MP3 URL"} />
                <DashEditInput email={email} background={background} bio={bio} music={music} image={image} discordID={discordID} username={name} displayName={displayName} setValue={setDiscordID} icon={<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} value={discordID} name={"Discord Presense"} />
              </div>
            </div>
            <div className="font-mono font-bold mt-5 text-lg">If you have any problems, DM @mir6u on Discord</div>

          </div>}
          {isInfo && <div className="h-full">yyy</div>}



        </div>

      </div>
      <div className="flex-grow ml-16 justify-center flex items-center">
        <div className="">
          <DashboardUser user={user} socials={socials} />
        </div>
      </div>
    </>
  );
};

export default DashSidebar;
