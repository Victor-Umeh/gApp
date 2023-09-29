import { PriceCard, CustomSectionHeading } from "./ui";

const PricesSection = () => {
  return (
    <section className="pt-[5rem] px-5 md:px-[6rem]">
      <CustomSectionHeading
        tag="OFFERS"
        headerBold="Packages &"
        headerLight="Pricing"
        questionMark={null}
      />
    </section>
  );
};

export default PricesSection;
