import React from "react";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
interface IImage {
  src: string | any;
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
        threshold={500}
        className={className}
      />
    </div>
  );
};

export default Image;
