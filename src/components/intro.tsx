import Image from "next/image";
import mobile from "../../public/mobile.png";
import { Android, Apple } from "@/icons";

const IntroSection = () => {
  return (
    <header className="bg-hero bg-cover bg-no-repeat bg-right min-h-screen relative flex items-end justify-center mt-[6rem] md:mt-[6.6rem]">
      <div className="absolute h-full w-full bg-secondary opacity-70" />

      <section className="flex flex-col justify-center items-center md:flex-row relative w-full max-w-[900px]">
        <div className="text-white md:order-last">
          <h1 className="text-[35px] text-center md:text-left font-roboto leading-none">
            <span className=" font-[100]">We Created</span> <br />
            <span className="text-[24px] font-bold uppercase">
              {" "}
              Revolution In Connections
            </span>
          </h1>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            laborum adipisci ut. Nesciunt ab quas consequatur reiciendis, minus
            possimus assumenda debitis architecto asperiores laudantium
            necessitatibus neque recusandae, veritatis beatae at.
          </p>

          <div>
            <a
              href={"/store"}
              className="py-5 text-[1rem] gap-2 font-bold w-full bg-primary flex items-center justify-center text-primary border-l border-slate-900"
            >
              <Android className="text-2xl" />
              Android
            </a>
            <a href="/store"></a>
          </div>
        </div>
        <Image
          alt="company mobile picture"
          src={mobile}
          className="max-w-[280px] mt-12"
        />
      </section>
    </header>
  );
};

export default IntroSection;
