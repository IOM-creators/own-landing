import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface IRichText {
  richText: Document;
}
const RichText: React.FC<IRichText> = ({ richText }) => {
  if (!richText) {
    return null;
  }

  return <>{documentToReactComponents(richText)}</>;
};

export default RichText;
