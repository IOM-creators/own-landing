import React from "react";
import Image from "../image";
import { Document } from "@contentful/rich-text-types";
import RichText from "../rich-text";
import cn from "classnames";

interface IImageWithText {
  className?: string;
  card: {
    image?: string;
    description?: Document;
    revert?: boolean;
  };
}

const ImageWithText: React.FC<IImageWithText> = ({ className = "", card }) => {
  return (
    <div
      className={cn({ className }, "grid grid-cols-1 md:grid-cols-2 md:gap-10")}
    >
      {card?.image && (
        <Image
          src={card.image}
          className="object-contain"
          classWrapper="mb-10 before:pt-[50%]"
        />
      )}
      {card?.description && (
        <div className={cn({ "-order-1": card.revert }, "text-xl mt-2")}>
          <RichText richText={card.description} />
        </div>
      )}
    </div>
  );
};

export default ImageWithText;
