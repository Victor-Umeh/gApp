import { CustomSectionHeading } from "./ui";
import SupportChannel from "./ui/supportChannels";
import { supportHandles } from "@/utils/constants";

const SupportSection = () => {
  return (
    <section
      className="relative pt-[5rem] px-5 md:px-[8rem] bg-support bg-center bg-no-repeat bg-cover lg:bg-right min-h-screen"
      id="support"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/80 " />
      <CustomSectionHeading
        tag="CONTACT US"
        headerBold="Need Help,"
        headerLight="Fill The Below Form"
        questionMark={null}
        variants="light"
      />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row gap-4 md:justify-center py-[8rem]">
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-9">
            <label htmlFor="name" className="w-full">
              <span className="block mb-3 text-[14px] text-white/80 ml-4">
                Your Name (required)
              </span>
              <input
                className="rounded-full text-main text-[14px] p-3 w-full"
                type="text"
                id="name"
              />
            </label>

            <label htmlFor="email" className="w-full">
              <span className="block mb-3 text-[14px] text-white/80 ml-4">
                Your Email (required)
              </span>
              <input
                className="rounded-full text-main text-[14px] p-3 w-full"
                type="email"
                id="email"
              />
            </label>
          </div>

          <label htmlFor="subject">
            <span className="block mb-3 text-[14px] text-white/80 ml-4">
              Subject
            </span>
            <input
              className="rounded-full text-main text-[14px] p-3 w-full"
              type="text"
              id="subject"
            />
          </label>
          <label htmlFor="department">
            <span className="block mb-3 text-[14px] text-white/80 ml-4">
              Department
            </span>
            <input
              className="rounded-full text-main text-[14px] p-3 w-full"
              type="text"
              id="department"
            />
          </label>

          <label htmlFor="message">
            <span className="block mb-3 text-[14px] text-white/80 ml-4">
              Your Mesage
            </span>
            <textarea
              className="w-full rounded-3xl"
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
          </label>
        </form>

        <div className="flex flex-col gap-12 py-12 md:py-8">
          {supportHandles.map((handle) => (
            <SupportChannel
              children={<handle.Icon />}
              type={handle.type}
              handle={handle.handle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
