import { PriceCard, CustomSectionHeading } from "@/components/ui";
import { packages } from "@/utils/constants";

const PricesSection = () => {
  return (
    <section className="py-[10rem] px-5 md:px-[8rem]" id="prices">
      <CustomSectionHeading
        tag="OFFERS"
        headerBold="Packages &"
        headerLight="Pricing"
        questionMark={null}
      />

      <div className="grid items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-[8rem]">
        {packages.map((item) => {
          const { tag, price, packages, category } = item;
          return (
            <PriceCard
              tag={tag}
              packages={packages}
              price={price}
              category={category}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PricesSection;
