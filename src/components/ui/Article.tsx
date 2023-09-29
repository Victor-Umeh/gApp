import { IArticleProps } from "../overview";

export const Article = ({
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
