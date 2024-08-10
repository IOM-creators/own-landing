import React from "react";
import cn from "classnames";

import Icon from "../icon";
import Button from "../button";
import { useGetReviewItem } from "@/graphql/queries/review-item";

interface IReviewItem {
  id?: string;
  data?: any;
  className?: string;
}
const ReviewItem: React.FC<IReviewItem> = ({
  id = "",
  data = { review: {} },
  className,
}) => {
  const { review } = id ? useGetReviewItem(id) : data;
  const customStyles: React.CSSProperties = {
    ...(review.paddingTop && { "--pd-top": `${review.paddingTop}px` }),
    ...(review.paddingBottom && { "--pd-top": `${review.paddingBottom}px` }),
  } as React.CSSProperties;

  return (
    <div className={cn({}, className, "review-item")} style={customStyles}>
      <div className="review-item__title flex justify-between">
        <h4 className="">{review.name}</h4>
        <svg
          width="41"
          height="26"
          viewBox="0 0 41 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 26L27.4101 0H41L30.6348 26H20.5ZM0 26L6.91011 0H20.5L10.1348 26H0Z"
            fill="#E8E2DC"
          />
        </svg>
      </div>
      {review.description && (
        <div className="review__description truncate-2 mt-4 mb-10">
          {review.description}
        </div>
      )}
      <div className="review__footer flex justify-between items-center">
        {review.link && (
          <Button
            typeButton={review.link.buttonType}
            styleButton={review.link.styleButton}
            icon={review.link.icon.url}
            link={review.link.url}
            className="text-primary-green"
          >
            {review.link.title}
          </Button>
        )}
        {review.platform && (
          <Button
            typeButton={review.link.buttonType}
            styleButton={review.link.styleButton}
            link={review.link.url}
            icon={review.platform.url}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
