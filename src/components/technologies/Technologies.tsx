import React from "react";
import { useGetTechnologies } from "@/graphql/queries/technologies";
import Image from "../image";
import Marquee from "../marquee";

interface ITechnologies {
  id?: string;
}

const Technologies: React.FC<ITechnologies> = ({ id = "" }) => {
  const { section }: any = useGetTechnologies(id);
  if (!section) return null;
  return (
    <div className="technologies">
      <Marquee>
        {section?.technologies &&
          section.technologies.map((item: any, index: number) => (
            <div
              key={index}
              className="inline-block p-6 md:p-10 text-center max-w-32 md:max-w-40 w-full mr-6 md:mr-10"
            >
              {item.icon && <Image src={item.icon.url} />}
              {item.title && <span>{item.title}</span>}
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default Technologies;
