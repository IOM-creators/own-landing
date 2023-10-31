import React from "react";
import Placeholder from "../../assets/placeholders/person.png";
import cn from "classnames";

interface IImage {
  src: string;
  borderRadius?: string;
  alt?: string;
  classWrapper?: string;
}

const Image: React.FC<IImage> = ({ src, alt, classWrapper, borderRadius }) => {
  return (
    <div className={cn(classWrapper, "img-wrapper")}>
      <img
        src={src || Placeholder}
        className={borderRadius && borderRadius}
        alt={alt}
      />
    </div>
  );
};

export default Image;
