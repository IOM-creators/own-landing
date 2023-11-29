import React from "react";
import DynamicComponent from "../dynamic-component";
import { useGetSections } from "../../graphql";

const Sections = () => {
  const { sections } = useGetSections();
  return (
    <>
      {sections.map((section: any) => (
        <DynamicComponent
          key={section.id}
          name={section.name}
          id={section.id}
          className="section py-10 my-10 md:py-16 md:my-16 container mx-lg"
        />
      ))}
    </>
  );
};

export default Sections;
