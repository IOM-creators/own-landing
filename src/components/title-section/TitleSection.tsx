import React from "react";
import DynamicTag from "../dynamic-tag";

interface ITitleSection {
  tag: string;
  fontSize?: string;
  children: string;
  supText?: string;
  position?: string;
  className?: string;
}

const TitleSection: React.FC<ITitleSection> = ({
  tag,
  children,
  fontSize = "text-5xl",
  supText,
  position = "text-left",
  className = "",
}) => {
  const classes = [position, className, 'font-medium'];
  return (
    <div className={classes.join(" ")}>
      {supText && <span className="text-gray mt-1 mb-1 block">{supText}</span>}
      <DynamicTag tag={tag} className={fontSize}>
        {children}
      </DynamicTag>
    </div>
  );
};

export default TitleSection;
