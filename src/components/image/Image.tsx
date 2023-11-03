import React from "react";
import Placeholder from "../../assets/placeholders/person.png";
import cn from "classnames";

interface IImage {
  src: string;
  alt?: string;
  classWrapper?: string;
  className?: string;
}

const Image: React.FC<IImage> = ({ src, alt, classWrapper, className }) => {
  return (
    <div className={cn(classWrapper, "img-wrapper")}>
      <img src={src || Placeholder} className={className} alt={alt} />
    </div>
  );
};

export default Image;
