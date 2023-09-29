import Image from "next/image";
import placeholder from "../../../public/header-poster.jpg";

const GalleryImage = () => (
  <div className="relative w-[400px] h-[800px]">
    <Image
      src={placeholder}
      alt="placeholder"
      sizes="(max-width: 375px) 100vw, 100%"
      fill
      priority
      className="w-full object-cover"
    />
  </div>
);

export default GalleryImage;
