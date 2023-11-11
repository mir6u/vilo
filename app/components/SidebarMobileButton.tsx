import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

interface Props {
  pathname: string;
  svg: any;
  label: string;
  isRight: boolean;
  key: any;
}

const SidebarMobileButton = ({ pathname, svg, label, isRight, key }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const currentPath = usePathname();
  return (
    <button
    key={key}
      ref={ref}
      onClick={() => {
        document.querySelectorAll(".rightsc").forEach((el) => {
          el.classList.add("tr");
        });
        document.querySelectorAll(".leftsc").forEach((el) => {
          el.classList.add("tl");
        });
        setTimeout(() => {
          router.push(pathname);
        }, 300);
        router.prefetch(pathname);
      }}
      className={`flex ${currentPath === pathname ? "bg-[#333638]" : null} ${
        isRight ? "rightsc" : "leftsc"
      } hover:bg-[#5f6467] btn transition-all duration-300 hover:bg-opacity-70  items-center gap-2 py-3 w-56 px-8 rounded-full`}
    >
      {svg}
      <p>{label}</p>
    </button>
  );
};

export default SidebarMobileButton;