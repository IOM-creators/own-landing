import { useGetSection } from "@/graphql/queries/section";
import React, { useRef } from "react";
import GqlComponent from "../page/gql-component";
import cn from "classnames";
import Image from "../image";
import RichText from "../rich-text";
import Button from "../button";
import { componentMap } from "@/helpers/componentsMap";

interface ISection {
  id: string;
  className?: string;
  children?: React.ReactNode;
  section: any
}
const Section: React.FC<ISection> = ({ id, className, section }) => {
  const refSection = useRef<HTMLElement | null>(null);



  if (!section?.title) return null;

  const customStyles: React.CSSProperties = {
    ...(section.paddingTop && {
      "--pd-top": `${section.paddingTop}px`,
    }),
    ...(section.paddingBottom && {
      "--pd-bottom": `${section.paddingBottom}px`,
    }),
    ...(section.maxWidth && {
      "--max-w-section": `${section.maxWidth}px`,
    }),
    ...(section.withoutContainer && {
      "--max-w-section": `100%`,
    }),
    ...(section.aligment && {
      "--aligment-section": `${section.aligment.toLowerCase()}`,
    }),
    ...(section.heightBackground && {
      "--bg-height": `${section.heightBackground}%`,
    }),
    ...(section.background && {
      "--bg-section": `${section.background}`,
    }),
    ...(section.colorText && {
      "--color-section": `${section.colorText}`,
    }),
    ...(section.gridGap && {
      "--grid-gap-section": `${section.gridGap}px`,
    }),
    ...(section.grid && {
      "--grid-column-section": `repeat(${section.grid}, 1fr)`,
    }),
  } as React.CSSProperties;
  return (
    <section
      id={id}
      ref={refSection}
      style={customStyles}
      className={cn("section", {})}
    >
      <div
        className={cn("section__wrapper", {
          [`grid`]: section?.grid > 1,
          container: !section.withoutContainer,
        })}
      >
        {!section?.showOnlyComponents && (
          <div
            className={cn(
              { "col-span-1 lg:col-span-full": section.button },
              "section__content slideUp"
            )}
          >
            <div className="section__header">
              <div
                className={cn(
                  {
                    "flex justify-between flex-wrap mb-6 lg:mb-10":
                      section.button,
                    "px-4": section.withoutContainer,
                  },
                  "section__header-title"
                )}
              >
                {section.title && !section.titleRichtext ? (
                  <h2 className="mb-6">{section.title}</h2>
                ) : (
                  <div className="custom-title text-center mb-6 md:mb-12 md:mb-24 mx-auto max-w-[1050px]">
                    <RichText richText={section.titleRichtext.json} />
                  </div>
                )}
                {section?.button && (
                  <Button
                    styleButton={section.button.styleButton}
                    typeButton={section.button.buttonType}
                    icon={section.button.icon.url}
                    link={section.button.url}
                    className="w-full md:w-auto"
                  >
                    {section.button.title}
                  </Button>
                )}
              </div>
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
                classWrapper="mt-10 lg:mt-20 before:pt-[50%]"
                className="object-contain"
              />
            )}
          </div>
        )}
        {section?.components &&
          section.components.map(
            (component: any, index: number) => {
              for (const key of Object.keys(component)) {
                const updatedKey = key.charAt(0).toUpperCase() + key.slice(1);
                let ComponentGql = componentMap[updatedKey];
                return <ComponentGql section={...component} key={index} />
              }
            }
          )}
      </div>
    </section>
  );
};

export default Section;
