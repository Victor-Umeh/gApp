import { IArticleProps } from "@/types";

type Props = Omit<IArticleProps, "style" | "paragraph" | "children"> & {
  questionMark?: string | null;
};

const CustomSectionHeading = ({
  tag,
  headerBold,
  headerLight,
  questionMark = "?",
}: Props) => (
  <div className="relative ">
    <span
      aria-label="graphics pattern label"
      className="absolute top-0 left-0 md:-left-6 border-[9px] border-[#1b6e56]/10 w-[60px] h-[60px] rounded-lg rotate-45"
    />
    <span
      className="text-[#808080] text-md font-[200] italic"
      role="paragraph"
      aria-label="article tag"
    >
      {tag}
    </span>
    <h3 className="text-[38px] font-[900]">
      {headerBold}
      <span className="font-[200]"> {headerLight}</span> {questionMark}
    </h3>
  </div>
);

export default CustomSectionHeading;
