// MainProfileWithSocials.tsx

import React from "react";
import MainProfile from "./MainProfile";
import SocialsSection from "./SocialsSection";

interface MainProfileWithSocialsProps {
  user: any;
  socials: any; // Replace with the actual type of socials data
}

const MainProfileWithSocials = ({
  user,
  socials,
}: MainProfileWithSocialsProps) => {
  const backgroundStyle: any = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: user.background ? `url(${user?.background})` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg?20201103073518' ,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="h-full">
        <div style={backgroundStyle}></div>
        <main className="relative w-full h-full px-4 py-16 table">
          <div className="align-middle text-center">
            <div className="rounded-md shadow-4xl w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px] mt-14">
              <MainProfile user={user} />
              <SocialsSection socials={socials} />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default MainProfileWithSocials;
