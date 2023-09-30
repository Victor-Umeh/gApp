import { CustomSectionHeading } from "./ui";

const SupportSection = () => {
  return (
    <section className="relative pt-[5rem] px-5 md:px-[8rem] bg-support bg-center bg-no-repeat bg-cover lg:bg-right min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/80 -z-0" />
      <CustomSectionHeading
        tag="Contact Us"
        headerBold="Need Help,"
        headerLight="Fill The Below Form"
        questionMark={null}
        variants="light"
      />
      support
    </section>
  );
};

export default SupportSection;
