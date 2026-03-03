import React, { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return <main className="w-full p-5 ps-7">{children}</main>;
};

export default Content;
