import Image from "next/image";

export const ImageWrapper = ({ src, alt }: { src: any; alt: string }) => (
  <div className="w-full w-[400px] lg:w-[130%] max-w-[420px] bottom-0">
    <Image src={src} alt={alt} className="w-full" />
  </div>
);
