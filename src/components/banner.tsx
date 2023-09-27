import React from "react";

const Banner = () => {
  return (
    <section className="py-[80px] text-center bg-primary">
      <article className="px-12">
        <h3 className="text-[44px] font-bold mb-8">
          Online and Safe <span className="font-[100]">Payments Gateways</span>
        </h3>
        <p className="md:text-[18px]">
          Get fraud alerts if we detect any suspicious activity on your account,
          so you can verify each charges.
        </p>
      </article>
    </section>
  );
};

export default Banner;
