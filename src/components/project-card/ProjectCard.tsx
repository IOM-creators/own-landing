import React from "react";
import cn from "classnames";

import Image from "../image";
import RichText from "../rich-text";
import { useProjectById } from "@/graphql/queries/project-card";
import Link from "next/link";

interface IProjectCard {
  id: string;
  className?: string;
}
const ProjectCard: React.FC<IProjectCard> = ({ id = "", className }) => {
  const { project }: any = useProjectById(id);

  return (
    <div className="project-card">
      <div className="relative">
        {project?.image && (
          <Image
            src={project.image.url}
            className="object-cover"
            classWrapper="before:pt-[70%]"
          />
        )}
        {project?.title && (
          <div className="py-4 md:py-6">
            {project.title && <h3 className="">{project.title}</h3>}
            {project.technologies && (
              <ul className="technologies flex projects-center gap-4 mt-4">
                {project.technologies.map(
                  (technology: string, index: number) => (
                    <li key={index} className="border rounded-md p-2">
                      <span>{technology}</span>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        )}
        {project?.description && (
          <div className="text-xl mt-2 dots-3-line">
            <RichText richText={project.description} />
          </div>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="text-xl top-0 left-0 absolute w-full h-full"
        ></Link>
      </div>
    </div>
  );
};

export default ProjectCard;
