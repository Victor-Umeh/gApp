import Image from "next/image";
import { Hamburger, Gem } from "@/icons";
import Link from "next/link";

const links = ["intro", "overview", "features", "gallery", "prices", "support"];

const NavBar = () => {
  return (
    <nav className="fixed z-[999] w-full p-6 top-7 bg-secondary md:bg-secondary/0">
      <div className="md:w-[80%] flex items-center justify-between mx-auto font-[600] text-white">
        {/* logo */}
        <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          alt="company logo"
          className="md:w-[130px]"
        />
        {/* nav-links */}
        <ul className="hidden md:flex md:flex-1 md:justify-end md:gap-6  text-[13px] text-white capitalize tracking-widest">
          {links.map((link) => (
            <Link href={link} key={link}>
              <li className="px-5 py-3 duration-300 rounded-full cursor-pointer hover:text-main hover:bg-primary active:text-main active:bg-primary">
                {link}
              </li>
            </Link>
          ))}
        </ul>

        <button className="text-[11px] flex gap-2 items-center justify-center px-5 py-3 duration-300 rounded-full cursor-pointer border-[1.5px] border-[#ffe565] md:ml-6 hover:text-main hover:bg-primary">
          <Gem />
          DOWNLOAD APP
        </button>
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
