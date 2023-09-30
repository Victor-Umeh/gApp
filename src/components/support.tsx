import { CustomSectionHeading } from "./ui";
import SupportChannel from "./ui/supportChannels";

const SupportSection = () => {
  return (
    <section className="relative pt-[5rem] px-5 md:px-[8rem] bg-support bg-center bg-no-repeat bg-cover lg:bg-right min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/80 " />
      <CustomSectionHeading
        tag="CONTACT US"
        headerBold="Need Help,"
        headerLight="Fill The Below Form"
        questionMark={null}
        variants="light"
      />

      <div>
        <form className="relative w-full z-10 border border-red-400">
          <div>
            <label htmlFor="name" className="block w-screen">
              <span>Your Name (required)</span>
              <input type="text" id="name" />
            </label>
            <label htmlFor="email" className="block w-screen">
              <span>Your Email (required)</span>
              <input type="email" id="email" />
            </label>
          </div>
          <label htmlFor="" className="block w-screen">
            <span>Subject</span>
            <input type="text" />
          </label>
          <label htmlFor="" className="block w-screen">
            <span></span>
            <input type="text" />
          </label>
          <label htmlFor="message" className="block w-screen">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
          </label>
        </form>

        <div></div>
      </div>
    </section>
  );
};

export default SupportSection;
