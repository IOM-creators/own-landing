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
        <Icon icon="review-comma" />
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
