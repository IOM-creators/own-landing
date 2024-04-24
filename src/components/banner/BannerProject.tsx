import React, { useEffect, useState } from "react";
import Section from "../section";
import { useBannerById } from "@/graphql/queries/banner";
import { useProjectById } from "@/graphql/queries/projects";
import Image from '../image'
interface IBanner {
  id: string
}

interface IBannerContent {
  banner: any
  currentProject: any
}

interface ProjectContent {

}

const BannerProject: React.FC<IBanner> = ({ id }) => {
  const content = useProjectById(id)
  console.log('project',content?.project);
  if(!content?.project){
    return <></>
  }
  console.log('here',content);
  
  return (
    <div className="max-w-[550px] w-full rounded-3xl overflow-hidden">
      <Image src={content?.project?.card?.image?.url} classWrapper="max-w-[550px] w-full"/>

    </div>
  );
};

export default BannerProject;
