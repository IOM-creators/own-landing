import React from "react";

import project1 from "../../../assets/images/project1.png";
import project2 from "../../../assets/images/project2.png";
import project3 from "../../../assets/images/project3.png";
import project4 from "../../../assets/images/project4.png";
import Image from "../../image";
import Icon from "../../icon";

import { ISectionCommon } from "../../../helpers/commonInterfaces";

import { useGetPortfolio } from "../../../graphql/";
import Link from "next/link";

const Portfolio: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetPortfolio(id);

  return (
    <div id="Portfolio" className={className}>
      <h2 className="text-4xl lg:text-6xl font-bold uppercase mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <Link href="/" className="absolute w-full h-full top-0 left-0" />
          <Image src={project1.src} />
          <div className="my-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-3xl">Agency Website</h3>
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

        <div className="relative">
          <Link href="/" className="absolute w-full h-full top-0 left-0" />
          <Image src={project2.src} />
          <div className="my-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-3xl">Agency Website</h3>
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

        <div className="relative">
          <Link href="/" className="absolute w-full h-full top-0 left-0" />
          <Image src={project3.src} />
          <div className="my-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-3xl">Agency Website</h3>
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

        <div className="relative">
          <Link href="/" className="absolute w-full h-full top-0 left-0" />
          <Image src={project4.src} />
          <div className="my-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-3xl">Agency Website</h3>
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
      </div>
      <Link
        href="/"
        className="w-full flex items-center justify-center font-bold text-lg p-4 md:p-8 bg-grey mt-5"
      >
        View all
      </Link>
    </div>
  );
};

export default Portfolio;
