"use client";
import { UpArrow } from "@/icons";

const ScrollBtn = () => {
  //scroll to top
  // const handleScrollToTop = () => {
  //   window.scrollTo({
  //     left: 0,
  //     top: document.getElementById("features")?.getBoundingClientRect().top,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <button
      className="fixed duration-500 bottom-12 right-8 w-10 h-10 flex items-center justify-center text-main rounded-full bg-primary z-[999]"
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("intro")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <UpArrow />
    </button>
  );
};

export default ScrollBtn;
