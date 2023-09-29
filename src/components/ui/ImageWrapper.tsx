import Image from "next/image";

const ImageWrapper = ({ src, alt }: { src: any; alt: string }) => (
  <div className="w-full lg:w-[130%] max-w-[420px] bottom-0">
    <Image src={src} alt={alt} className="w-full" />
  </div>
);

export default ImageWrapper;
