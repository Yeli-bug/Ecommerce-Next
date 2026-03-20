import Link from "next/link";
import { Title } from "./ui/text";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-6 md:py-0 text-white px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
            Grab Unlimited
            <br />
            Designs for Your Projects
        </Title>
        <Link href={"/shop"} 
          className="bg-primary-hover/90 text-white/98 px-7 py-3 rounded-md text-sm font-semibold hover:text-white hover:bg-primary-light hovereffect mt-7 inline-block"
        >
          Shop Now
        </Link>
      </div>
      <Image src={banner_1} 
      alt="banner"
      className="hidden md:inline-flex w-96"
      /> 
      <div>

      </div>
    </div>
  );
};

export default HomeBanner;
