import React from "react";
import About from "../../../assets/images/about-us.png";
import founder1 from "../../../assets/images/founder1.png";
import founder2 from "../../../assets/images/founder2.png";
import founder3 from "../../../assets/images/founder3.png";
import Image from "../../image";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import { useGetAboutUs } from "../../../graphql/";

const AboutUs: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetAboutUs(id);

  return (
    <div id="AboutUs" className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-[_40%_60%] lap:grid-cols-[_25%_75%]  items-center">
        <div className="hidden lg:block">
          <Image src={About.src} onlyImg />
        </div>
        <div className="my-auto flex flex-wrap lap:flex-nowrap gap:8 lap:gap-16">
          <div className="max-w-[300px] w-full">
            <h2 className="text-4xl lg:text-6xl font-bold uppercase">
              About Us
            </h2>
            <div className="">
              <div className="flex mt-12">
                <Image
                  src={founder1.src}
                  className="object-contain object-left"
                  classWrapper="w-20 h-20 ml-[-4px] border-founder-icon"
                />
                <Image
                  src={founder2.src}
                  className="object-contain object-left"
                  classWrapper="w-20 h-20 ml-[-10px] border-founder-icon"
                />
                <Image
                  src={founder3.src}
                  className="object-contain object-left"
                  classWrapper="w-20 h-20 ml-[-10px] border-founder-icon"
                />
              </div>
              <h3 className="text-lg font-bold	text-orange my-5">
                Founders of IOM
              </h3>
            </div>
          </div>

          <div className="text-lg text-xl col-span-3  lap:col-span-1">
            At E-commerce, our team of experienced freelance developers, known
            as IOM Creators, has over 4 years of expertise in delivering
            top-notch Shopify and Ecommerce solutions tailored to your unique
            needs.
            <br />
            <br />
            We understand that your online store is the heart of your business,
            and our deep industry knowledge allows us to navigate challenges and
            seize opportunities, resulting in high-performing, customer-centric
            Ecommerce solutions.
            <div className="flex gap-4 lg:gap-12 mt-8 lg:mt-12">
              <span className="text-3xl lg:text-6xl font-bold">
                500+
                <span className="text-xs lg:text-xl block">
                  successful projects
                </span>
              </span>
              <span className="text-3xl lg:text-6xl font-bold">
                8+
                <span className="text-xs lg:text-xl block">years of exp.</span>
              </span>
              <span className="text-3xl lg:text-6xl font-bold">
                200+
                <span className="text-xs lg:text-xl block">
                  positive reviews
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
