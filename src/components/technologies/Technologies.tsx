import React from "react";
import Image from "../image";
import Marquee from "../marquee";

interface ITechnologies {
  id?: string;
  section: any;
}

const Technologies: React.FC<ITechnologies> = ({ id = "", section }) => {
  const { technologies }: any = section;
  const technologiesItems = technologies?.technologyCollection?.items || [];

  if (!technologies) return null;
  return (
    <div className="technologies">
      <Marquee>
        {technologiesItems.map((item: any, index: number) => (
          <div
            key={index}
            className="inline-block p-6 md:p-10 text-center max-w-32 md:max-w-40 w-full mr-6 md:mr-10"
          >
            <div className="flex flex-col gap-4">
              {item.icon && <Image src={item.icon.url} />}
              {item.title && <span>{item.title}</span>}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Technologies;
