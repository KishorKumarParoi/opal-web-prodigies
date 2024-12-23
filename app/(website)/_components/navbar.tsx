import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingPageNavbar = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className="w-8 h-8" />
        <Image
          src="/koom-ai-logo.svg"
          alt="Koom-Ai-logo"
          width={40}
          height={40}
        />
        KoomAi
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href={"/"}
          className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
        >
          Home
        </Link>
        <Link href={"/"} className="text-lg font-semibold">
          {" "}
          Pricing{" "}
        </Link>
        <Link href={"/"} className="text-lg font-semibold">
          {" "}
          Features{" "}
        </Link>
        <Link href={"/"} className="text-lg font-semibold">
          {" "}
          Contact{" "}
        </Link>
      </div>
      <Link href="/auth/sign-in">
        <Button className="text-base flex gap-x-2">
          <User fill="#000" />
          Login
        </Button>
      </Link>
    </div>
  );
};

export default LandingPageNavbar;
