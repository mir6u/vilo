import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Props {
  pathname: string;
  svg: any;
  isBordering: boolean;
  label: string;
}

const LGButton = ({ pathname, svg, isBordering, label }: Props) => {
  const {status, data: session} = useSession()
  const router = useRouter();
  const currentPath = usePathname();
  return (
    <button
      title={label}
      onClick={() => {
        router.push(pathname);
        router.prefetch(pathname);
      }}
      className={`flex transition-all items-center justify-center hover:scale-125 transform p-2 hover:text-white hover:bg-neutral-500 rounded-sm ${
        currentPath === pathname ? "bg-white  scale-110 text-gray-500" : null
      } ${isBordering ? "!rounded-full hover:rounded-full" : null}`}
    >
      {svg}
    </button>
  );
};

export default LGButton;