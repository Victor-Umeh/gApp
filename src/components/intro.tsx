import Image from "next/image";
import mobile from "../../public/mobile.png";
import { Apple, AndriodIco } from "@/icons";

const IntroSection = () => {
  return (
    <header className="bg-hero bg-cover bg-no-repeat bg-right min-h-[90vh] relative flex items-end justify-center mt-[6rem] md:mt-[6.6rem] md:items-center font-roboto">
      <div className="absolute w-full h-full opacity-60 bg-secondary" />

      <section className="flex flex-col justify-center items-center md:flex-row relative w-[80%] max-w-[1000px] gap-[3rem] md:gap-[6rem]">
        <div className="flex flex-col gap-10 text-white md:order-last">
          <h1 className="text-[35px] text-center md:text-left leading-10">
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
          className="block max-w-[280px] w-[100%]"
        />
      </section>
    </header>
  );
};

export default IntroSection;
