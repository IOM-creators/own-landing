import React from "react";

interface ITag {
  tag: string;
  children: string;
  className: string;
}

const DynamicTag: React.FC<ITag> = ({ tag, children, ...rest }) => {
  return React.createElement(tag, rest, children);
};

export default DynamicTag;
