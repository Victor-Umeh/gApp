import { CustomSectionHeading } from "./ui";
import { GallerySlide } from "./ui";

const GallerySection = () => {
  return (
    <section className="pt-[5rem] px-5 md:p-[8rem]">
      <CustomSectionHeading
        headerBold="Xtra Application"
        headerLight="Gallery"
        tag="IMAGES"
        questionMark={null}
      />
      <p>
        Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
        Quisque velit nisi, pretium ut lacinia in,{" "}
        <span className="underline font-bold">elementum</span> id enim.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
      </p>

      <GallerySlide />
    </section>
  );
};

export default GallerySection;
