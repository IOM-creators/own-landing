import React from "react";
import Section1 from "../section1";
import Section2 from "../section2";
import Section4 from "../section4";
import Section5 from "../section5";

interface ISections {
  className?: string;
}
const Sections: React.FC<ISections> = ({ className }) => {
  return (
    <div className={className}>
      <Section1 className="section mb-10 mt-10 md:mt-20 container mx-lg" />
      <Section2 className="section my-20 md:my-40 container mx-lg" />
      <Section4 className="section my-20 md:my-40 pt-20 pb-28 md:py-40 container mx-lg" />
      <Section5 className="section my-20 md:my-40 container mx-lg" />
    </div>
  );
};

export default Sections;
