import React from "react";

import Image from "../image";
interface IService {
  id: string;
  className?: string;
  section: any;
}

const Service: React.FC<IService> = ({ id = "", className, section }) => {
  const content = section;
  return (
    <div className="border-gray border p-[30px] inline-block ">
      <Image
        onlyImg
        className="w-10 h-10 mb-10"
        src={content?.service?.image?.url}
        alt="Service"
      ></Image>
      <h3 className="text-primary-green  mb-5 text-[30px] font-semibold leading-[30px]">
        {content?.service.title}
      </h3>
      <p className="text-base">{content?.service.description}</p>
    </div>
  );
};

export default Service;
