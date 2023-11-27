
"use client"
import React, { useEffect, useState } from "react";
import MainProfile from "./MainProfile";
import './components.css'
import SocialsSection from "./SocialsSection";

interface MainProfileWithSocialsProps {
  user: any;
  socials: any;
}

const MainProfileWithSocials: React.FC<MainProfileWithSocialsProps> = ({ user, socials }: MainProfileWithSocialsProps) => {
  const backgroundStyle: React.CSSProperties = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: user.background ? `url(${user?.background})` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg?20201103073518',
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isViewed, setIsViewed] = useState<boolean>(false);

  return (
    <div className="h-full flex justify-center items-center">
      <div onClick={() => setIsOpen(true)} style={backgroundStyle}></div>

      {isOpen ? (
        <main className="relative w-full h-full px-4 py-16 table">
          <div className="align-middle text-center">
            <div className="rounded-md main shadow-4xl w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px] mt-14">
              <MainProfile key={"heh"} user={user} />
              <SocialsSection key={"hehe"} socials={socials} />
            </div>
          </div>
        </main>
      ) : (
        <p className="text-center top-1/2 lg:text-5xl absolute left-1/2 -translate-x-1/2 font-mono text-white text-xl ">
          Click anywhere
        </p>
      )}
    </div>
  );
};

export default MainProfileWithSocials;
