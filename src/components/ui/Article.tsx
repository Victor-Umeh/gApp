import { IArticleProps } from "@/types";
import CustomSectionHeading from "./CustomSectionHeading";

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
    <CustomSectionHeading
      tag={tag}
      headerBold={headerBold}
      headerLight={headerLight}
    />
    <p className="text-[18px] md:w-[60ch]">{paragraph}</p>
    {children}
  </article>
);

export default Article;
