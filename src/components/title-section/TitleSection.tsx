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
const sizes: any = [
  { "12": "text-xs" },
  { "14": "text-sm" },
  { "16": "text-base" },
  { "18": "text-lg" },
  { "20": "text-xl" },
  { "24": "text-2xl" },
  { "30": "text-3xl" },
  { "36": "text-4xl" },
  { "48": "text-5xl" },
  { "60": "text-6xl" },
  { "72": "text-7xl" },
  { "96": "text-8xl" },
  { "128": "text-9xl" },
];

const TitleSection: React.FC<ITitleSection> = ({
  tag,
  children,
  fontSize = "48",
  supText,
  position = "text-left",
  className = "",
}) => {
  const size = sizes.find((size: any) => size[fontSize]);
  const classes = [position, className];
  return (
    <div className={classes.join(" ")}>
      {supText && <span className="text-gray mt-1 mb-1 block">{supText}</span>}
      <DynamicTag tag={tag} className={size && size[fontSize]}>
        {children}
      </DynamicTag>
    </div>
  );
};

export default TitleSection;
