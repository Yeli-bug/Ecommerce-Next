// import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({className}: {className?: string}) => {
  return (
    <Link href={"/"}>
        <h2
        className={cn("text-2xl font-bold", 
            className
        )}
        >
         LOGO DS
        </h2>
    </Link>
  );
};

export default Logo;
