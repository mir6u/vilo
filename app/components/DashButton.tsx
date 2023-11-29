import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Props {
  pathname: boolean;
  svg: any;
  isBordering: boolean;
  label: string;
  key: any;
  onClick: any
}

const DashButton = ({ pathname, svg, isBordering, label, onClick }: Props) => {
  const currentPath = usePathname();
  return (
    <button
      title={label}
      onClick={onClick}
      className={`flex transition-all items-center justify-center hover:scale-125 transform p-2 hover:text-white hover:bg-neutral-500 rounded-sm ${pathname ? "bg-white  scale-110 text-gray-500" : null
        } ${isBordering ? "!rounded-full hover:rounded-full" : null}`}
    >
      {svg}
    </button>
  );
};

export default DashButton;