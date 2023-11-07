import React from "react";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import Placeholder from "../../assets/placeholders/person.png";

interface IImage {
  src: string;
  alt?: string;
  classWrapper?: string;
  className?: string;
}

const Image: React.FC<IImage> = ({ src, alt, classWrapper, className }) => {
  return (
    <div className={cn(classWrapper, "img-wrapper")}>
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="opacity"
        placeholderSrc={Placeholder}
        className={className}
      />
    </div>
  );
};

export default Image;
