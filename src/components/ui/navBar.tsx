"use client";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Hamburger, Gem } from "@/icons";

const links = ["intro", "overview", "features", "gallery", "prices", "support"];

const NavBar = () => {
  //Not optimal❌
  // window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);

  //   if (window.scrollY > 100) {
  //     ref.current.classList.remove("top-7");
  //     ("bg-black/70 top-0");
  //     ref.current.classList.add("bg-black/70", "top-0");
  //   } else {
  //     ref.current.classList.add("top-7");
  //     ("bg-black/70 top-0");
  //     ref.current.classList.remove("bg-black/70", "top-0");
  //   }
  // });
  const activeLink = usePathname();
  console.log(activeLink);

  return (
    <nav className="fixed z-[999] w-full p-6 top-7" id="nav">
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
            <li key={link}>
              <Link
                className={clsx(
                  "px-5 py-3 duration-300 rounded-full cursor-pointer hover:text-main hover:bg-primary active:text-main active:bg-primary",
                  { "text-main bg-primary": activeLink === link }
                )}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link}
              </Link>
            </li>
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
