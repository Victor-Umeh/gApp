import { Android, Apple } from "@/icons";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 flex w-full md:hidden">
      <a
        href={"/store"}
        className="py-5 text-md gap-2 font-bold w-full bg-primary flex items-center justify-center text-[#051923] border-r border-slate-700"
      >
        <Apple className="text-3xl" />
        iOS App
      </a>
      <a
        href={"store"}
        className="py-5 text-md gap-2 font-bold w-full bg-primary flex items-center justify-center text-[#051923] border-l border-slate-700"
      >
        <Android className="text-3xl" />
        Android
      </a>
    </nav>
  );
};

export default MobileNav;
