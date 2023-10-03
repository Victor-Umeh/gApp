"use client";
import { UpArrow } from "@/icons";
import { log } from "console";

const handleScrollToTop = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

const ScrollBtn = () => {
  return (
    <button
      className="fixed bottom-12 right-8 w-10 h-10 flex items-center justify-center text-main rounded-full bg-primary z-[999]"
      onClick={handleScrollToTop}
    >
      <UpArrow />
    </button>
  );
};

export default ScrollBtn;
