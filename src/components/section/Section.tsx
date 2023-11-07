import React, { useRef } from "react";

interface ISection {
  id?: string;
  sectionRef?: string;
  className?: string;
  children?: React.ReactNode;
}
const Section: React.FC<ISection> = ({
  id,
  sectionRef,
  className,
  children,
}) => {
  const refSection = useRef<HTMLElement | null>(null);
  return (
    <section id={id} ref={refSection} className={className}>
      {children}
    </section>
  );
};

export default Section;
