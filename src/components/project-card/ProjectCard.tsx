import React from "react";
import cn from "classnames";

import Image from "../image";
import RichText from "../rich-text";
import Link from "next/link";
import { motion } from "framer-motion";

interface IProjectCard {
  id: string;
  className?: string;
  section: any;
}
const ProjectCard: React.FC<IProjectCard> = ({
  id = "",
  className,
  section,
}) => {
  const { projectCard }: any = section;
  const { card } = projectCard;

  if (!card) return null;

  return (
    <div className="project-card">
      <div className="relative">
        {card?.image && (
          <Image
            src={card.image.url}
            className="object-cover"
            classWrapper="before:pt-[70%]"
          />
        )}
        {card?.title && (
          <div className="py-4 md:py-6">
            {card.title && <h3 className="">{card.title}</h3>}
            {card.technologies && (
              <ul className="technologies flex flex-wrap projects-center gap-4 mt-4">
                {card.technologies.map((technology: string, index: number) => (
                  <li key={index} className="border rounded-md p-2">
                    <span>{technology}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {card?.description && (
          <div className="text-xl mt-2 dots-3-line">
            <RichText richText={card.description} />
          </div>
        )}
        <Link
          href={`/projects/${card?.slug}`}
          className="text-xl top-0 left-0 absolute w-full h-full"
        ></Link>
      </div>
    </div>
  );
};

export default ProjectCard;
