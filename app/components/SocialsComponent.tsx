import React, { ReactNode } from "react";

interface Props {
  social: string;
  socialIcon: ReactNode;
}

const SocialsComponent = ({ social, socialIcon }: Props) => {
  return (
    <>
      <div className="flex items-center gap-3 justify-center flex-row">
        <div className="flex bg-gray-950 justify-center rounded-lg p-2.5 items-center ">
          {socialIcon}
        </div>
        <div className="font-mono text-white text-lg font-semibold">
          {social}
        </div>
      </div>

      <div>
        <svg
          className="hover:translate-x-1 duration-500"
          width="30px"
          height="20px"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default SocialsComponent;
