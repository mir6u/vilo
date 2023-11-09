import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string[];
  price: number;
}

const PlanComponent = ({ title, description, price }: Props) => {
  return (
    <>
      <div className="bg-gradient-to-tr  persp scale-[0.97] duration-300 hover:scale-100 flex-1 snap-start p-10 from-blue-400 via-blue-300 rounded-xl  to-purple-300">
        <div className="mb-6">
          <p className="font-bold text-[1.7rem]">{title}💎</p>
          <p className="font-medium text-lg">${price} / Lifetime</p>
        </div>
        <div className="flex  mb-16 flex-col gap-1">
          {description.map((value, index) => {
            return (
              <>
                <div className="flex items-center font-semibold gap-3">
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="0 -3 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>checkmark</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Icon-Set-Filled"
                        transform="translate(-518.000000, -1039.000000)"
                        fill="currentColor"
                      >
                        <path
                          d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.39 529.862,1065.39 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2"
                          id="checkmark"
                        ></path>
                      </g>
                    </g>
                  </svg>{" "}
                  {value}
                </div>
              </>
            );
          })}
        </div>
        <div className="absolute bottom-4 left-[25%]">
          <Link
            className="text-black hover:scale-110 duration-300 py-3 font-semibold items-center px-6 rounded-xl flex gap-1 text-xl bg-white"
            href={"https://discordapp.com/users/977627340605628447"}
          >
            Buy Now
            <svg
              height="20px"
              width="20px"
              version="1.1"
              id="x32"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M483.157,164.434H350.466l-60.035,58.975c-8.135,7.987-18.892,12.384-30.29,12.384
        c-11.692,0-22.647-4.585-30.839-12.934c-15.834-16.122-16.41-41.596-1.947-58.425H28.843C12.91,164.434,0,177.344,0,193.276v9.614
        c0,15.703,12.548,28.457,28.178,28.81l31.094,190.434c3.771,23.066,23.69,40.002,47.059,40.002h299.28
        c23.37,0,43.296-16.936,47.069-40.002l31.094-190.434c15.646-0.329,28.226-13.09,28.226-28.81v-9.614
        C512,177.344,499.091,164.434,483.157,164.434z M319.972,351.697H191.98v-30.051h127.992V351.697z"
                />
                <path
                  d="M277.62,210.36L397.493,92.599c9.828-9.647,9.968-25.448,0.312-35.268c-9.656-9.828-25.449-9.976-35.277-0.32
        L242.655,174.772c-9.828,9.664-9.968,25.448-0.312,35.277C251.998,219.876,267.792,220.024,277.62,210.36z"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlanComponent;
