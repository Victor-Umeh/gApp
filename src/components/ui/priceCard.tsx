"use client";
import React, { useState } from "react";
import { Check } from "@/icons";
import clsx from "clsx";

type TPackages = {
  package: string;
  available: boolean;
};

type TProps = {
  tag: string;
  price: string;
  packages: TPackages[];
  category: string;
};

const PriceCard = ({ tag, price, packages, category }: TProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center gap-14 rounded-xl border border-[#999999] px-8 py-10",
        {
          "bg-secondary min-h-[620px]": category === "main",
          "hover:bg-primary/10 hover:-translate-y-6 transition-transform duration-500":
            category === "secondary",
        }
      )}
    >
      <div className="text-center">
        <h4 className="text-[#999999]">{tag}</h4>
        <span
          className={clsx("text-[64px] font-[600]", {
            "text-secondary": category === "main",
          })}
        >
          {price}
        </span>
      </div>

      <ul className="w-full">
        {packages.map((item) => (
          <li
            key={item.package}
            className={clsx(
              "flex items-center gap-4 border-b border-[#999999] border-dashed py-3 pl-2 group",
              {
                "text-secondary": item.available && category === "main",
                "text-[hsl(0,0%,60%)]": !item.available && category === "main",
                "text-[#999999]": !item.available && category === "secondary",
              }
            )}
          >
            <Check className="group-hover:scale-[1.3] transition-transform duration-300" />
            {item.package}
          </li>
        ))}
      </ul>

      <button className="py-4 w-3/4 max-w-[180px] text-base rounded-full bg-primary font-bold">
        Purchase Now
      </button>
    </div>
  );
};

export default PriceCard;
