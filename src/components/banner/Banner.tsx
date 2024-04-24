import React, { useEffect, useState } from "react";
import Section from "../section";
import { useBannerById } from "@/graphql/queries/banner";
import { useProjectById } from "@/graphql/queries/projects";
import BannerProject from "./BannerProject";

interface IBanner {
  id: string
}

interface IBannerContent {
  banner: any
  currentProject: any
}

interface ProjectContent {

}

const Banner: React.FC<IBanner> = ({ id }) => {

  const { content } = useBannerById(id);
  const { banner } = content;
  const { title, currentProject } = banner;





  return (
    <Section id="BlogBanner">
      {title && <h1 className="text-center pb-7">{title}</h1>}
      <div className="border-b border-color-dark-blue pb-[72px] bt-[40px]">
        <div className="flex">
         {currentProject && <BannerProject id={currentProject.sys.id}/>} 
        </div>
      </div>
    </Section>
  );
};

export default Banner;
