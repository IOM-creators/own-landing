import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Document } from "@contentful/rich-text-types";

interface IRichText {
  richText: Document;
  onlyText?: boolean;
}
const RichText: React.FC<IRichText> = ({ richText, onlyText }) => {
  if (!richText) {
    return null;
  }

  return (
    <>
      {onlyText
        ? documentToPlainTextString(richText)
        : documentToReactComponents(richText)}
    </>
  );
};

export default RichText;
