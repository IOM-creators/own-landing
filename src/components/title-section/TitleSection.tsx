import React from "react";
import DynamicTag from "../dynamic-tag";

interface ITitle {
  tag: string;
  fontSize?: string;
  children: string;
  supText?: string;
  position?: string;
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

const TitleSection: React.FC<ITitle> = ({
  tag,
  children,
  fontSize = "20",
  supText,
  position = "text-center",
}) => {
  const size = sizes.find((size: any) => size[fontSize]);
  console.log("size", size);
  return (
    <div className={position}>
      {supText && <span className="text-gray mt-1 mb-1 block">{supText}</span>}
      <DynamicTag tag={tag} className={size && size[fontSize]}>
        {children}
      </DynamicTag>
    </div>
  );
};

export default TitleSection;
