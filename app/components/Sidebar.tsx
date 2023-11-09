"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import SidebarMobileButton from "./SidebarMobileButton";
import LGButton from "./LGButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [route, setRoute] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const ref1 = useRef<HTMLButtonElement>(null);
  const { status, data: session } = useSession();
  if (status === 'unauthenticated') {
    router.push('/')
  } 
   const buttons = [
    {
      pathname: status === "authenticated" ? '/profile' : '/',
      svg: (
        <svg
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
      isBordering: true,
    },
    {
      pathname: "https://discord.gg/2HD3qe79ag",
      svg: (
        <svg
          width={25}
          viewBox="0 -28.5 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                fill="currentColor"
                fill-rule="nonzero"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
      label: "Discord",
      isRight: false,
      isBordering: false,
    },
    {
      pathname: "/premium",
      svg: (
        <svg
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
      label: "Premium",
      isRight: true,
      isBordering: false,
    },
    {
      pathname: "https://blog.mirui.ru",
      svg: (
        <svg
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
      label: "Thoughts",
      isRight: false,
      isBordering: false,
    },
    {
      pathname: "https://github.com/mir6u",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
        </svg>
      ),
      label: "GitHub",
      isRight: true,
      isBordering: true,
    },
  ];
  return (
    <>
      <nav className="bg-black z-50 flex lg:hidden justify-between items-center px-12 py-4">
        <p className="text-sm font-bold font-mono text-white flex items-center gap-4">
          <span className="h-2 w-2 font-bold z-10 bg-gradient-to-r from-cyan-500 to-purple-300 via-blue-600 rounded-full"></span>
          Vilo
        </p>
        <button
          onClick={() => {
            setIsOpen(true);
            console.log(isOpen);
          }}
          className="h-10 w-10 bg-[#333638] p-2 rounded-full text-white"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="currentColor"
            >
              <path
                d="M630 4032 c-64 -24 -160 -123 -183 -187 -55 -159 18 -332 171 -403
l57 -27 1450 0 c1648 0 1507 -8 1609 86 74 67 100 129 101 234 0 68 -4 89 -28
137 -30 62 -83 115 -149 150 l-43 23 -1470 2 c-1355 2 -1474 0 -1515 -15z"
              />
              <path
                d="M4257 4030 c-75 -29 -132 -82 -169 -157 -27 -56 -32 -77 -32 -137 1
-284 342 -428 541 -229 66 66 88 123 88 228 0 78 -4 97 -27 141 -36 68 -113
136 -178 157 -68 22 -162 21 -223 -3z"
              />
              <path
                d="M630 2752 c-64 -24 -160 -123 -183 -187 -55 -159 18 -332 171 -403
l57 -27 1450 0 c1648 0 1507 -8 1609 86 74 67 100 129 101 234 0 68 -4 89 -28
137 -30 62 -83 115 -149 150 l-43 23 -1470 2 c-1355 2 -1474 0 -1515 -15z"
              />
              <path
                d="M630 1472 c-64 -24 -160 -123 -183 -187 -55 -159 18 -332 171 -403
l57 -27 810 0 c924 0 870 -5 969 86 74 67 100 129 101 234 0 68 -4 89 -28 137
-30 62 -83 115 -149 150 l-43 23 -830 2 c-757 2 -834 0 -875 -15z"
              />
            </g>
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div
          onClick={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 300);
          }}
          className="h-screen w-full  fixed bg-[#000008]/70 backdrop-blur-sm z-[5555] inset-0"
        >
          <aside className="fixed text-slate-100 rounded-lg flex flex-col h-full w-full justify-center items-center p-4 gap-5 slide-in-elliptic-top-fwd">
            {buttons.map((button) => {
              return (
                <SidebarMobileButton
                  key={button.label}
                  pathname={button.pathname}
                  label={button.label}
                  svg={button.svg}
                  isRight={button.isRight}
                />
              );
            })}
          </aside>
        </div>
      )}
      <div className="hidden lg:block">
        <aside className="fixed bg-[#16161D] items-center p-1.5 text-white border transform left-8 top-[50%] translate-y-[-50%] justify-between flex flex-col border-slate-100/5 rounded-full gap-5">
          {buttons.map((button) => {
            return (
              <>
                <LGButton
                  label={button.label}
                  pathname={button.pathname}
                  svg={button.svg}
                  key={button.label}
                  isBordering={button.isBordering}
                />
              </>
            );
          })}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
