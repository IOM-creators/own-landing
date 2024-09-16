import React from "react";
import cn from "classnames";

import Icon from "../icon";
import Button from "../button";

interface IReviewItem {
  id?: string;
  section: any;
  className?: string;
}
const ReviewItem: React.FC<IReviewItem> = ({
  id = "",
  section,
  className,
  ...props
}) => {
  const { reviewItem } = section;
  const customStyles: React.CSSProperties = {
    ...(reviewItem.paddingTop && { "--pd-top": `${reviewItem.paddingTop}px` }),
    ...(reviewItem.paddingBottom && {
      "--pd-bottom": `${reviewItem.paddingBottom}px`,
    }),
  } as React.CSSProperties;

  return (
    <div
      className={cn({}, className, "review-item flex flex-col h-full")}
      style={customStyles}
      {...props}
    >
      <div className="review-item__title flex justify-between">
        <h4 className="">{reviewItem.name}</h4>
        <Icon icon="review-comma" />
      </div>
      {reviewItem.description && (
        <div className="review__description truncate-2 mt-4 mb-10">
          {reviewItem.description}
        </div>
      )}
      <div className="review__footer flex justify-between items-center mt-auto">
        {reviewItem.link && (
          <Button
            typeButton={reviewItem.link.buttonType}
            styleButton={reviewItem.link.styleButton}
            icon={reviewItem.link.icon.url}
            link={reviewItem.link.url}
            className="text-primary-green"
          >
            {reviewItem.link.title}
          </Button>
        )}
        {reviewItem.platform && (
          <Button
            typeButton="Link"
            styleButton="Only Icon"
            link={reviewItem.link.url}
            icon={reviewItem.platform.url}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
