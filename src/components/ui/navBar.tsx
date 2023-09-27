import Image from "next/image";
import { Hamburger } from "@/icons";

const links = ["intro", "overview", "features", "gallery", "prices", "support"];

const NavBar = () => {
  return (
    <nav className="fixed z-10 w-full p-6 top-7 bg-secondary md:bg-secondary/0">
      <div className="md:w-[80%] flex items-center justify-between mx-auto">
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
              className="px-4 py-2 transition-all duration-500 rounded-full cursor-pointer hover:text-main hover:bg-primary active:text-main active:bg-primary"
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
      </div>
    </nav>
  );
};

export default NavBar;
