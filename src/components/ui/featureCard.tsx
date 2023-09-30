import React from "react";
type IProps = {
  heading: string;
  paragraph: string;
  Icon: any;
};

const FeatureCard = ({ heading, paragraph, Icon }: IProps) => (
  <figure className="max-w-[500px] bg-secondary/50  flex flex-col gap-4 items-center justify-center pb-9 px-8 rounded-xl text-center -z-10 hover:bg-primary group transition-all duration-300">
    <span className="-translate-y-[2.3rem] bg-primary w-[6rem] h-[6rem] rounded-full text-4xl text-main  flex items-center justify-center shadow-xl group-hover:scale-[1.1] duration-300">
      <Icon />
    </span>
    <h3 className="text-xl font-bold text-secondary group-hover:text-main duration-300">
      {heading}
    </h3>
    <div className="w-[15%] h-[4px] bg-white opacity-90 group-hover:scale-x-[4.5] transition-all duration-300" />
    <p className="text-white opacity-70 leading-8 group-hover:text-main duration-300">
      {paragraph}
    </p>
  </figure>
);

export default FeatureCard;
