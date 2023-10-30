import React from "react";
import Section1 from "../section1";
import Section2 from "../section2";

interface ISections {
  className?: string;
}
const Sections: React.FC<ISections> = ({ className }) => {
  return (
    <div className={className}>
      <Section1 className="section mb-10 mt-10 md:mt-20" />
      <Section2 className="section mb-40 mt-40" />
    </div>
  );
};

export default Sections;
