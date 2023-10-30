import React from "react";
import Section1 from "../section1";
import Section2 from "../section2";
import Section4 from "../section4";

interface ISections {
  className?: string;
}
const Sections: React.FC<ISections> = ({ className }) => {
  return (
    <div className={className}>
      <Section1 className="mb-10 mt-10 md:mt-20" />
      <Section2 className="mb-40 mt-40" />
      <Section4 className="mb-40 mt-40 bg-dark-blue py-40" />
    </div>
  );
};

export default Sections;
