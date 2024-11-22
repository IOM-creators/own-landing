import React, { useRef } from "react";
import cn from "classnames";
import Image from "../image";
import RichText from "../rich-text";
import Button from "../button";
import { componentMap } from "@/helpers/componentsMap";
import { motion } from "framer-motion";

interface ISection {
  id: string;
  className?: string;
  children?: React.ReactNode;
  tagH1: boolean;
  section: any;
}
const Section: React.FC<ISection> = ({ id, className, section, tagH1 }) => {
  const refSection = useRef<HTMLElement | null>(null);

  if (!section) return null;
  const imgUrl = section?.image?.url || "";
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
              "section__content"
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
                {section.title && !section.titleRichtext?.json ? (
                  tagH1 ? (
                    <motion.h1
                      className="mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {section.title}
                    </motion.h1>
                  ) : (
                    <motion.h2
                      className="mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {section.title}
                    </motion.h2>
                  )
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="custom-title text-center mb-6 md:mb-12 md:mb-24 mx-auto max-w-[1050px]"
                  >
                    <RichText richText={section.titleRichtext?.json} />
                  </motion.div>
                )}
                {section?.button && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Button
                      styleButton={section.button.styleButton}
                      typeButton={section.button.buttonType}
                      icon={section.button.icon.url}
                      link={section.button.url}
                      className="w-full md:w-auto"
                    >
                      {section.button.title}
                    </Button>
                  </motion.div>
                )}
              </div>
              {section.subtitle && (
                <motion.span
                  className="block text-xl font-bold mt-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {section.subtitle}
                </motion.span>
              )}
            </div>
            {section?.content && (
              <motion.div
                className="section__dexcription text-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <RichText richText={section.content.json} />
              </motion.div>
            )}
            {imgUrl && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src={imgUrl}
                  alt="Section"
                  classWrapper="mt-10 lg:mt-20 before:pt-[61%] md:before:pt-[50%]"
                  className="object-cover md:object-contain"
                />
              </motion.div>
            )}
          </div>
        )}
        {section?.components &&
          section.components.map((component: any, index: number) => {
            for (const key of Object.keys(component)) {
              const updatedKey = key.charAt(0).toUpperCase() + key.slice(1);
              let ComponentGql = componentMap[updatedKey];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * index }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <ComponentGql section={{ ...component }} />{" "}
                </motion.div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default Section;
