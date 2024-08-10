import React from "react";
import Image from "../image";
import RichText from "../rich-text";
import { useGetAboutSection } from "@/graphql/queries/about-us";

interface IAboutSection {}

type ProjectInfo = {
  headlineInfo: string;
  descriptionInfo: string;
};

const AboutSection: React.FC<IAboutSection> = () => {
  const { aboutSection } = useGetAboutSection();
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
      <div className="grid grid-cols-1 lg:grid-cols-[_40%_60%] lap:grid-cols-[_25%_75%]  items-center">
        {image && (
          <div className="hidden lg:block">
            <Image onlyImg src={image.url} />
          </div>
        )}

        <div className="my-auto flex flex-wrap lap:flex-nowrap gap:8 lap:gap-16">
          <div className="max-w-[300px] w-full">
            {title && (
              <h2 className="text-3xl lg:text-5xl font-bold uppercase text-nowrap">
                {title}
              </h2>
            )}

            <div className="">
              <div className="flex mt-12">
                {foundersCollection &&
                  foundersCollection?.items?.map((founder: any) => {
                    return (
                      <Image
                        src={founder.url}
                        className="object-contain object-left"
                        classWrapper="w-20 h-20 ml-[-4px]"
                      />
                    );
                  })}
              </div>
              {foundersText && (
                <h3 className="text-lg font-bold	text-primary-orange my-5">
                  {foundersText}
                </h3>
              )}
            </div>
          </div>

          <div className="text-xl col-span-3  lap:col-span-1">
            {content && <RichText richText={content.json} />}
            <div className="flex gap-4 lg:gap-12 mt-8 lg:mt-12">
              {parsedInfo &&
                parsedInfo.map(({ headlineInfo, descriptionInfo }) => {
                  return (
                    <span className="text-3xl lg:text-5xl font-bold">
                      {headlineInfo}
                      <br />
                      <span className="text-xs lg:text-xl">
                        {descriptionInfo}
                      </span>
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
