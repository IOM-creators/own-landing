import React from "react";
import Placeholder from "../../assets/placeholders/person.jpg";

interface IImage {
  src: string;
  borderRadius?: string;
  alt?: string;
}

const Image: React.FC<IImage> = ({ src, alt, borderRadius }) => {
  return (
    <div className="img-wrapper">
      <img
        src={src || Placeholder}
        className={borderRadius && borderRadius}
        alt={alt}
      />
    </div>
  );
};

export default Image;
