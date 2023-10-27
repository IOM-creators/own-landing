import React from "react";
import Section1 from "../section1";

interface ISections {
  className?: string;
}
const Sections: React.FC<ISections> = ({ className }) => {
  return (
    <div className={className}>
      <Section1 />
    </div>
  );
};

export default Sections;
