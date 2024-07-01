import React from "react";

import Image from "../../image";
import Icon from "../../icon";

import { ISectionCommon } from "../../../helpers/commonInterfaces";

import { useGetPortfolio } from "../../../graphql/";
import Link from "next/link";

const Portfolio: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetPortfolio(id);
  const { buttonName, slides, showButton, showPagination, title, projectsToShow } = section
  return (
    <div id="Portfolio" className={className}>
      <div className="flex justify-between items-center mb-5 flex-wrap">
        <h2 className="text-4xl lg:text-6xl font-bold uppercase mb-5">
          {title}
        </h2>
        {buttonName && showButton && <Link
          href="/"
          className="btn btn--secondary justify-between group max-w-[270px] w-full text-lg font-bold text-white mb-5">
          {buttonName}
          <Icon
            icon="left-arrow"
            className="group-hover:translate-x-2 transition-transform duration-300"
            strokeClass="stroke-white"
          />
        </Link>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {slides?.map((slide: any, index: number) => {
          return projectsToShow > index &&
            <div className="relative">

              <Link href="/" className="absolute w-full h-full top-0 left-0" />
              <Image src={`${slide.image}?q=100`} />
              <div className="my-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-3xl">{slide.title}</h3>
                    <div className="mt-2 text-lg">
                      <span className="mr-4">ui/ux design</span>
                      <span className="mr-4">front-end</span>
                      <span className="mr-4">back-end</span>
                    </div>
                  </div>
                  <Icon
                    icon="left-arrow"
                    className="my-auto text-white"
                    strokeClass="stroke-white fill-white"
                  />
                </div>
              </div>
            </div>
        })}
      </div>


    </div>
  );
};

export default Portfolio;
