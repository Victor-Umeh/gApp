// import React from "react";
import Image from "next/image";
import mobileTop from "../../public/mobile-top.png";
import mobileBottom from "../../public/mobile-bottom.png";
type IArticleProps = {
  children: React.ReactNode;
  tag: string;
  headerBold: string;
  headerLight: string;
  paragraph: string;
};

const ImageWrapper = ({ src, alt }: { src: any; alt: string }) => (
  <div className="w-full max-w-[400px]">
    <Image src={src} alt={alt} className="w-full" />
  </div>
);

const Article = ({
  children,
  tag,
  headerBold,
  headerLight,
  paragraph,
}: IArticleProps) => (
  <article className="flex flex-col gap-[5rem] text-center md:text-left md:max-w-[50%]">
    <div className="relative ">
      <span
        aria-label="graphics pattern label"
        className="absolute top-0 left-0 md:-left-6 border-[9px] border-[#1b6e5632] w-[60px] h-[60px] rounded-lg rotate-45"
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
    <p className="text-[18px]">{paragraph}</p>
    {children}
  </article>
);

const OverviewSection = () => {
  return (
    <section className="py-[6rem] px-[3rem] md:px-[12rem] divide-y-[2.5px] divide-gray-400">
      {/* section 1 */}
      <section className="flex flex-col md:flex-row justify-center gap-[5rem]">
        <Article
          headerBold="What is"
          headerLight="GUPA Application"
          tag="INFORMATION"
          paragraph="Track recent charges and payments with a timeline of your activity.
        Check your spending power to find out if your charges will be
        approved, so you can make purchases with confidence. Before you
        arrive, check in from the train, plane, or road. As you depart,
        leave your key and hit the road."
          children={
            <div className="flex flex-col md:flex-row">
              <p className="text-8xl font-[200]">
                89{" "}
                <span className="text-[24px] text-gray-400">Top Reviews</span>
              </p>
              <p className="text-8xl font-[200]">
                57
                <span className="text-[24px] text-gray-400">User Ratings</span>
              </p>
            </div>
          }
        />
        <ImageWrapper src={mobileTop} alt="top half of smart phone" />
      </section>

      {/* section 2 */}
      <section>Sect 2</section>
    </section>
  );
};

export default OverviewSection;
