import React from "react";
import cn from "classnames";

import Icon from "../icon";

interface IReviewItem {
  feedback: {
    name: string;
    stars: number;
    response: string;
    linkText: string;
    linkUrl: string;
  };
  className?: string;
}
const ReviewItem: React.FC<IReviewItem> = ({ feedback, className }) => {
  return (
    <div className="text-center py-2 ">
      <div className="flex items-center justify-center w-10 h-10 mb-5 mx-auto rounded-full bg-gray">
        <span className="text-700 text-2xl text-white">{feedback.name[0]}</span>
      </div>
      <h5 className="text-xl">{feedback.name}</h5>
      <div className="flex justify-center my-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Icon
            key={i}
            icon="star"
            className={cn({ "fill-green": i <= feedback.stars })}
          />
        ))}
      </div>
      <i className="truncate-2">"{feedback.response}"</i>
      <br />
      <a
        href={feedback.linkUrl}
        className="mt-3 pb-1 relative before:block before:left-0  before:absolute before:content-'' before:w-full before:top-full before:h-px before:bg-dark-blue"
      >
        {feedback.linkText}
      </a>
    </div>
  );
};

export default ReviewItem;
