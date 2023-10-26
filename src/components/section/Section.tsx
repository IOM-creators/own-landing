import React from "react";

interface ISection {
  className?: string;
  children?: React.ReactNode;
}
const Section: React.FC<ISection> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export default Section;
