import React from "react";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
interface IImage {
  src: string;
  alt?: string;
  classWrapper?: string;
  className?: string;
  onlyImg?: boolean;
}

const Image: React.FC<IImage> = ({
  src,
  alt,
  classWrapper,
  className,
  onlyImg,
}) => {
  return onlyImg ? (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="opacity"
      threshold={500}
      className={className}
    />
  ) : (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="opacity"
      threshold={500}
      wrapperClassName={classWrapper}
      className={className}
    />
  );
};

export default Image;
