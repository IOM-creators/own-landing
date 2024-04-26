import { useGetSection } from "@/graphql/queries/section";
import React, { useRef } from "react";
import GqlComponent from "../page/gql-component";
import cn from "classnames";
import Image from "../image";
import RichText from "../rich-text";

interface ISection {
  id: string;
  className?: string;
  children?: React.ReactNode;
}
const Section: React.FC<ISection> = ({ id, className }) => {
  const refSection = useRef<HTMLElement | null>(null);
  const { section } = useGetSection(id);

  if (!section?.title) return null;

  return (
    <section
      id={id}
      ref={refSection}
      className={cn("container", {
        [`pb-[${section.paddingBottom}px]`]: section.paddingBottom,
        [`pt-[${section.paddingTop}px]`]: section.paddingTop,
        [`grid grid-gap-4 md:grid-cols-2 md:grid-cols-${section.grid} items-center`]:
          section.grid > 1,
      })}
    >
      {section.image && <Image src={section.image.url} />}
      {section.component && <GqlComponent section={section.component} />}
      {section.content && <RichText richText={section.content.json} />}
    </section>
  );
};

export default Section;
