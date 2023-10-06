"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import mobile from "../../public/mobile.png";
import { Apple, AndriodIco } from "@/icons";
import { NavBar } from "./ui";

const IntroSection = () => {
  const ref = useRef<any>();

  //Intersection observation function that updates site navBar when hero/intro section is not inView.
  useEffect(() => {
    const _el = document.getElementById("nav");

    const observationCallbackFunc = (entries: any) => {
      if (!entries[0].isIntersecting) {
        _el?.classList.remove("top-7");
        _el?.classList.add("bg-black/90", "top-0", "duration-[800ms]");
      } else {
        _el?.classList.add("top-7");
        _el?.classList.remove("bg-black/90", "top-0");
      }
    };

    const observer = new IntersectionObserver(observationCallbackFunc, {
      root: null,
      threshold: 0.1,
    });

    observer.observe(ref.current);
  }, []);

  return (
    <header
      className="relative flex items-end justify-center min-h-screen bg-center bg-no-repeat bg-cover bg-hero lg:bg-right md:items-center font-roboto"
      id="intro"
      ref={ref}
    >
      <NavBar />
      <div className="absolute w-full h-full bg-gray-900/80" />

      <section className="flex flex-col justify-center items-center md:flex-row relative md:w-[80%] max-w-[1000px] gap-[3rem] md:gap-[6rem] mb-[4rem] md:mt-[8.5rem]">
        <div className="flex flex-col gap-10 text-white md:order-last">
          <h1 className="text-[35px] text-center md:text-left leading-8 md:leading-10">
            <span className=" font-[100]">We Created</span> <br />
            <span className="text-[24px] md:text-[42px] font-bold uppercase">
              Revolution In Connections
            </span>
          </h1>
          <p className="hidden md:block md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            laborum adipisci ut. Nesciunt ab quas consequatur reiciendis, minus
            possimus assumenda debitis architecto asperiores laudantium
            necessitatibus neque recusandae, veritatis beatae at.
          </p>

          <div className="hidden md:flex md:gap-4">
            <a
              href={"/store"}
              className="py-3 px-7 text-sm  gap-2 font-bold w-[max-content] bg-white flex items-center justify-center text-main border-l border-slate-900 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Apple Store
              <Apple className="text-lg" />
            </a>
            <a
              href={"/store"}
              className="py-3 px-7 text-sm  gap-2 font-bold w-[max-content] bg-primary flex items-center justify-center text-main border-l border-slate-900 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Google Play
              <AndriodIco className="text-lg" />
            </a>
          </div>
        </div>
        <Image
          alt="company mobile picture"
          src={mobile}
          className="block max-w-[260px] w-[50%]"
        />
      </section>
    </header>
  );
};

export default IntroSection;
