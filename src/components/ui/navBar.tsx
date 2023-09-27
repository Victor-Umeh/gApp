import Image from "next/image";
import { Hamburger } from "@/icons";

const links = ["intro", "overview", "features", "gallery", "prices", "support"];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-6 md:px-[12rem] bg-secondary fixed w-full top-0 z-10">
      {/* logo */}
      <Image
        src={"/logo.svg"}
        width={100}
        height={100}
        alt="company logo"
        className="md:w-[130px]"
      />

      {/* nav-links */}
      <ul className="hidden md:flex md:flex-1 md:justify-end md:gap-6 font-semibold text-[14px] text-white capitalize tracking-widest">
        {links.map((link) => (
          <li
            key={link}
            className="hover:text-main hover:bg-primary active:text-main active:bg-primary rounded-full py-2 px-4 transition-all duration-500 cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* hamburger */}
      <button className="p-3 rounded-full bg-primary md:hidden">
        <Hamburger className="text-2xl text-main" />
      </button>
      {/* nav-menu */}
    </nav>
  );
};

export default NavBar;
