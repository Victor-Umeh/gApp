// import React from "react";
import Image from "next/image";
import mobileTop from "../../public/mobile-top.png";
import mobileBottom from "../../public/mobile-bottom.png";
import { Check } from "@/icons";

type IArticleProps = {
  children: React.ReactNode;
  tag: string;
  headerBold: string;
  headerLight: string;
  paragraph: string;
  style?: string;
};

const ImageWrapper = ({ src, alt }: { src: any; alt: string }) => (
  <div className="w-full w-[400px] lg:w-[130%] max-w-[420px] bottom-0">
    <Image src={src} alt={alt} className="w-full" />
  </div>
);

const Article = ({
  children,
  tag,
  headerBold,
  headerLight,
  paragraph,
  style,
}: IArticleProps) => (
  <article
    className={`flex flex-col gap-[3.2rem] text-center md:text-left  ${style}`}
  >
    <div className="relative ">
      <span
        aria-label="graphics pattern label"
        className="absolute top-0 left-0 md:-left-6 border-[9px] border-[#1b6e56]/10 w-[60px] h-[60px] rounded-lg rotate-45"
      />
      <span
        className="text-[#808080] text-lg font-[200] italic"
        role="paragraph"
        aria-label="article tag"
      >
        {tag}
      </span>
      <h3 className="text-[38px] font-bold">
        {headerBold}
        <span className="font-[200]"> {headerLight}</span> ?
      </h3>
    </div>
    <p className="text-[18px] md:w-[60ch]">{paragraph}</p>
    {children}
  </article>
);

const OverviewSection = () => {
  return (
    <section className="py-[6rem] px-[3rem] md:px-[12rem] divide-y-[2.5px] divide-gray-400 font-open">
      {/* section 1 */}
      <section className="flex flex-col lg:flex-row justify-center gap-[5rem]">
        <Article
          headerBold="What is"
          headerLight="GUPA Application"
          tag="INFORMATION"
          paragraph="Track recent charges and payments with a timeline of your activity.
        Check your spending power to find out if your charges will be
        approved, so you can make purchases with confidence. Before you
        arrive, check in from the train, plane, or road. As you depart,
        leave your key and hit the road."
        >
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <p className="text-8xl font-[200] flex flex-col justify-center md:flex-row items-baseline">
              89{" "}
              <span className="text-[24px] text-gray-400 min-w-[max-content]">
                Top Reviews
              </span>
            </p>
            <p className="text-8xl font-[200] flex flex-col justify-center md:flex-row items-baseline">
              57
              <span className="text-[24px] text-gray-400 min-w-[max-content]">
                User Ratings
              </span>
            </p>
          </div>
        </Article>

        <ImageWrapper src={mobileTop} alt="top half of smart phone" />
      </section>

      {/* section 2 */}
      <section className="flex flex-col lg:flex-row justify-center gap-[5rem]">
        <ImageWrapper src={mobileBottom} alt="bottom half of smart phone" />
        <Article
          headerBold="Why choose"
          headerLight="GUPA Application"
          tag="REASONS"
          paragraph="Track recent charges and payments with a timeline of your activity.
        Check your spending power to find out if your charges will be
        approved, so you can make purchases with confidence. Before you
        arrive, check in from the train, plane, or road. As you depart,
        leave your key and hit the road."
          style="translate-y-12"
        >
          <ul className="flex flex-col items-start w-full gap-4 md:gap-[7rem] md:flex-row">
            <div className="flex flex-col items-start space-y-2">
              <li className="font-semibold text-main text-[18px] group">
                <Check className="inline w-[38px] h-[38px] p-[0.63rem] mr-2 text-5xl rounded-full bg-primary text-main group-hover:bg-secondary group-hover:text-secondary transition duration-500" />
                Easy to Use
              </li>
              <li className="font-semibold text-main text-[18px] group">
                <Check className="inline w-[38px] h-[38px] p-[0.63rem] mr-2 text-5xl rounded-full bg-primary text-main group-hover:bg-secondary group-hover:text-secondary transition duration-500" />
                Mobile Check-In
              </li>
              <li className="font-semibold text-main text-[18px] group">
                <Check className="inline w-[38px] h-[38px] p-[0.63rem] mr-2 text-5xl rounded-full bg-primary text-main group-hover:bg-secondary group-hover:text-secondary transition duration-500" />
                Account Activity
              </li>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <li className="font-semibold text-main text-[18px] group">
                <Check className="inline w-[38px] h-[38px] p-[0.63rem] mr-2 text-5xl rounded-full bg-primary text-main group-hover:bg-secondary group-hover:text-secondary transition duration-500" />
                Easy to Use
              </li>
              <li className="font-semibold text-main text-[18px] group">
                <Check className="inline w-[38px] h-[38px] p-[0.63rem] mr-2 text-5xl rounded-full bg-primary text-main group-hover:bg-secondary group-hover:text-secondary transition duration-500" />
                Mobile Check-In
              </li>
              <li className="font-semibold text-main text-[18px] group">
                <Check className="inline w-[38px] h-[38px] p-[0.63rem] mr-2 text-5xl rounded-full bg-primary text-main group-hover:bg-secondary group-hover:text-secondary transition duration-500" />
                Account Activity
              </li>
            </div>
          </ul>
        </Article>
      </section>
    </section>
  );
};

export default OverviewSection;
