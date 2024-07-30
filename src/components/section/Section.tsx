import { useGetSection } from "@/graphql/queries/section";
import React, { useRef } from "react";
import GqlComponent from "../page/gql-component";
import cn from "classnames";
import Image from "../image";
import RichText from "../rich-text";
import { useWindowWidth } from "@/helpers/reactHooks";

interface ISection {
  id: string;
  className?: string;
  children?: React.ReactNode;
}
const Section: React.FC<ISection> = ({ id, className }) => {
  const refSection = useRef<HTMLElement | null>(null);
  const { section } = useGetSection(id);
  const windowWidth = useWindowWidth();

  if (!section?.title) return null;

  const styles = {
    paddingBottom: `${section.paddingBottom}px`,
    paddingTop: `${section.paddingTop}px`,
    gridTemplateColumns:
      windowWidth && windowWidth > 1024
        ? `repeat(${section.grid}, 1fr)`
        : "1fr",
  };

  return (
    <section
      id={id}
      ref={refSection}
      style={styles}
      className={cn("container", {
        [`grid gap-x-16 lg:gap-x-24 grid-cols-1 items-center`]:
          section?.grid > 1,
      })}
    >
      {section?.image && <Image src={section.image.url} />}
      {section.component && <GqlComponent section={section.component} />}
      {section?.content && (
        <div className="slideUp text-xl">
          <RichText richText={section.content.json} />
        </div>
      )}
    </section>
  );
};

export default Section;
