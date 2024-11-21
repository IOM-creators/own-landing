import React from "react";
import Image from "../image";
import RichText from "../rich-text";
import { motion } from "framer-motion";

interface IAboutSection {
  id: string;
  section: any;
}

type ProjectInfo = {
  headlineInfo: string;
  descriptionInfo: string;
};

const AboutSection: React.FC<IAboutSection> = ({ id = "", section }) => {
  const { aboutSection } = section;
  const {
    title,
    image,
    foundersCollection,
    foundersText,
    projectsInfo,
    content,
  } = aboutSection;

  const parsedInfo: ProjectInfo[] = projectsInfo?.map(
    (info: string): ProjectInfo => {
      const [headlineInfo, descriptionInfo] = info.split("|");
      return { headlineInfo, descriptionInfo };
    }
  );

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[_40%_60%] lap:grid-cols-[_40%_60%] items-center">
        {image && (
          <div>
            {title && (
              <motion.h2
                className="text-3xl mt-[1rem] mb-6 lg:text-5xl font-bold uppercase whitespace-nowrap"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {title}
              </motion.h2>
            )}
            {image && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image onlyImg src={image.url} />
              </motion.div>
            )}
          </div>
        )}
        <div className="lg:ml-10">
          {/* <div className="max-w-[300px] w-full">
            {title && (
              <h2 className="text-3xl lg:text-5xl font-bold uppercase whitespace-nowrap">
                {title}
              </h2>
            )}

            <div className="">
              <div className="flex mt-12">
                {foundersCollection &&
                  foundersCollection?.items?.map(
                    (founder: any, index: number) => {
                      return (
                        <Image
                          key={index}
                          src={founder.url}
                          className="object-cover object-top"
                          classWrapper="w-20 h-20 ml-[-8px] border-4 border-light-gray rounded-full overflow-hidden"
                        />
                      );
                    }
                  )}
              </div>
              {foundersText && (
                <h3 className="text-lg font-bold	text-primary-orange my-5">
                  {foundersText}
                </h3>
              )}
            </div>
          </div> */}

          <div className="text-xl col-span-3  lap:col-span-1">
            {content && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <RichText richText={content.json} />
              </motion.div>
            )}
            <div className="flex gap-4 lg:gap-12 mt-8 lg:mt-12">
              {parsedInfo &&
                parsedInfo.map(
                  ({ headlineInfo, descriptionInfo }, index: number) => {
                    return (
                      <motion.span
                        key={index}
                        className="text-3xl lg:text-5xl font-bold"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 * index }}
                      >
                        {headlineInfo}
                        <br />
                        <span className="text-xs lg:text-xl">
                          {descriptionInfo}
                        </span>
                      </motion.span>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
