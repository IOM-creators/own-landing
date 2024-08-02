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

  const customStyles: React.CSSProperties = {
    "--pd-bottom": `${section.paddingBottom}px`,
    "--pd-top": `${section.paddingTop}px`,
    ...(section.heightBackground && {
      "--bg-height": `${section.heightBackground}%`,
    }),
    ...(section.background && {
      "--bg-section": `${section.background}`,
    }),
    ...(section.colorText && {
      "--color-section": `${section.colorText}`,
    }),
    "--grid-column-section":
      windowWidth && windowWidth > 1024
        ? `repeat(${section.grid}, 1fr)`
        : "1fr",
  } as React.CSSProperties;

  return (
    <section
      id={id}
      ref={refSection}
      style={customStyles}
      className={cn("section", {})}
    >
      <div
        className={cn("section__wrapper container", {
          [`grid gap-x-16 lg:gap-x-24 grid-cols-1`]: section?.grid > 1,
        })}
      >
        {!section?.showOnlyComponents && (
          <div className="section__content slideUp">
            <div className="section__header">
              {section.title && !section.titleRichtext ? (
                <h2>{section.title}</h2>
              ) : (
                <div className="custom-title text-center mb-12 md:mb-24 mx-auto max-w-[1050px]">
                  <RichText richText={section.titleRichtext.json} />
                </div>
              )}
              {section.subtitle && (
                <span className="block text-xl font-bold mt-4">
                  {section.subtitle}
                </span>
              )}
            </div>
            {section?.content && (
              <div className="section__dexcription text-xl">
                <RichText richText={section.content.json} />
              </div>
            )}
            {section?.image && (
              <Image
                src={section.image.url}
                classWrapper="mt-20 before:pt-[50%]"
                className="object-contain"
              />
            )}
          </div>
        )}
        {section?.componentsCollection &&
          section.componentsCollection.items.map((component: any) => (
            <GqlComponent section={component} />
          ))}
      </div>
    </section>
  );
};

export default Section;
