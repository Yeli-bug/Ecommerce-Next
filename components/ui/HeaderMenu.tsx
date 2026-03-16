"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className="group relative hover:text-primary transition-colors duration-300"
        >
          {item?.title}

          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-primary-hover group-hover:w-1/2 group-hover:left-0 transition-all duration-300"></span>

          <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-primary-hover group-hover:w-1/2 group-hover:right-0 transition-all duration-300"></span>

        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;