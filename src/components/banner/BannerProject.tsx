import React, { useEffect, useState } from "react";
import Section from "../section";
import { useBannerById } from "@/graphql/queries/banner";
import { useProjectById } from "@/graphql/queries/projects";
import Image from '../image'
import RichText from "../rich-text";
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

  if(!content?.project || !content?.project?.card) {
    return <></>
  }
  console.log(content);
  
  return (
    <div className="flex justify-between items-center">
      <div className="max-w-[550px] w-full rounded-3xl overflow-hidden">
        {content?.project?.card?.image?.url &&   <Image src={content?.project?.card?.image?.url} classWrapper="max-w-[550px] w-full"/>}
      </div>
      <h3 className="text-5xl">{content?.project?.card?.title }</h3>
        {/* {content?.project?.card?.description &&  <RichText richText={content?.project?.card?.description} />} */}
    </div>
   
  );
};

export default BannerProject;
