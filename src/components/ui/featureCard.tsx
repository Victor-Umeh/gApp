import React from "react";
type IProps = {
  heading: string;
  paragraph: string;
  Icon: any;
};

const FeatureCard = ({ heading, paragraph, Icon }: IProps) => (
  <figure className="max-w-[500px] bg-secondary/50  flex flex-col gap-5 items-center justify-center pb-10 px-8 rounded-md text-center text-secondary -z-10">
    <span className="-translate-y-[2.3rem] bg-primary w-[6rem] h-[6rem] rounded-full text-4xl text-main  flex items-center justify-center">
      <Icon />
    </span>
    <div className="w-[20%] h-[4px] bg-primary" />
    <h3 className="text-xl font-bold">{heading}</h3>
    <p>{paragraph}</p>
  </figure>
);

export default FeatureCard;
