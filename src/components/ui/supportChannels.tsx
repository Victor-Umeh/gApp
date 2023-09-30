import { type } from "os";
import React from "react";

type TProps = {
  children: React.ReactNode;
  type: string;
  handle: string;
};
const SupportChannel = ({ children, type, handle }: TProps) => {
  return (
    <div>
      <span>{children}</span>
      <p>
        {type}
        <span>{handle}</span>
      </p>
    </div>
  );
};

export default SupportChannel;
