
"use client"
import React, { useEffect, useRef, useState } from "react";
import MainProfile from "./MainProfile";
import './components.css'
import SocialsSection from "./SocialsSection";

interface MainProfileWithSocialsProps {
  user: any;
  socials: any;
}

const DashboardUser: React.FC<MainProfileWithSocialsProps> = ({ user, socials }: MainProfileWithSocialsProps) => {
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
  const myRef = useRef<any>()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative w-full max-w-[1200px] min-w-[600px] h-full px-4 py-16 table">
      <div style={backgroundStyle}></div>
      <div className="align-middle text-center">
        <div className="rounded-md main shadow-4xl w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px] mt-14">
          <MainProfile key={"heh"} user={user} />
          <SocialsSection key={"hehe"} socials={socials} />
        </div>
      </div>
    </main>
  );
};

export default DashboardUser;
