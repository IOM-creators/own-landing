import React, { useRef, useState } from "react";
import { useGetHeader, useGetHeroBanner } from "../../graphql";
import styles from "./styles.module.scss";
import cn from "classnames";
import Image from "../image";
import Icon from "../icon";
import { useWindowDimensions, useScrollAnimation } from "@/helpers/reactHooks";
import { HeaderState } from "@/store/types/header";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import RichText from "../rich-text";

interface ILetter {
  letter: string;
  fullText: string;
  delay: number;
}

interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = () => {
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const { heroBanner } = useGetHeroBanner();
  const { height }: HeaderState = useTypedSelector((state) => state.header);
  const windowDimensions = useWindowDimensions();
  const heightSection = windowDimensions.height - (height || 0) * 2;
  const bullets = Array.from({ length: 4 }, () =>
    Array.from({ length: 8 }, (_, index) => index + 1)
  );
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const positionClasses = [
    "top-[10%] left-[10%]",
    "top-1/2 right-[5%] translate-y-[-30%]",
    "bottom-[-10%] left-1/2 translate-x-[-50%]",
  ];
  const animationDelay = ["0.6s", "0.3s", "0s"];
  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);

  return (
    <div
      id="hero-banner"
      className={cn(styles.heroSection, "text-dark-blue py-4")}
    >
      <div
        style={{ height: `${heightSection}px` }}
        className="relative w-full relative flex justify-center flex-col flex-wrap	md:flex-row md:justify-between items-center"
      >
        <div className="relative inset-0 justify-center w-full lg:w-[50%] ">
          <div className="text-left max-w-3xl lap:max-w-6xl">
            <h1 className="text-2xl sm:text-3xl  md:text-4xl md:leading-[4rem]  leading-[3rem] font-bold">
              {heroBanner.abbreviation.map((text: string, index: number) => {
                const words = text.split(" ");
                const nextText = words.slice(1).join(" ");
                const animationDelay = index ? index / 4 : 0;
                return (
                  <span
                    key={index}
                    ref={(el: any) => (elementsRef.current[index] = el)}
                    style={{ animationDelay: `${animationDelay}s` }}
                    className="scaleUp flex flex-col items-center mb-4 md:mb-0 md:block"
                  >
                    <span className="text-blue sm:text-4xl text-3xl md:text-5xl">
                      {words[0]}&nbsp;
                    </span>
                    {nextText}
                    <br />
                  </span>
                );
              })}
            </h1>
          </div>
        </div>
        <div
          className={cn(
            styles.heroBanner,
            "right-0 w-full h-full  lg:w-[50%] lg:h-[50%] hidden lg:block relative"
          )}
        >
          <div className="absolute top-1/2  left-0 translate-x-[50%]  grid grid-cols-4 gap-4 z-10 opacity-90">
            {bullets.map((tr, index) => (
              <div className="grid gap-4" key={"tr-" + index}>
                {tr.map((td) => (
                  <div
                    className="bg-gray-light w-2 h-2 rounded-full"
                    key={"td-" + td}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute top-0 bg-contain  bg-no-repeat bg-hero-img-1 bg-center  w-full h-full"></div>
          <div className="absolute top-0 bg-contain  bg-no-repeat bg-hero-img-2 w-full h-full bg-center z-[-1]"></div>
          <div className="absolute top-0 translate-y-[-50%] rotate-90 right-1/2 translate-x-[50%]  grid grid-cols-4 gap-4 z-10 opacity-90">
            {bullets.map((tr, index) => (
              <div className="grid gap-4" key={"second-tr-" + index}>
                {tr.map((td) => (
                  <div
                    className="bg-gray-light w-2 h-2 rounded-full"
                    key={"second-td-" + td}
                  ></div>
                ))}
              </div>
            ))}
          </div>

          {heroBanner.rightCards.map((item: any, index: number) => (
            <div
              style={{ animationDelay: animationDelay[index] }}
              className={`hidden lg:flex absolute ${positionClasses[index]}  bg-white shadow-primary rounded-lg  info-block p-4 flex items-center`}
            >
              <Image src={item.icon.url} classWrapper="w-12" />
              <div className="ml-4">
                <h3 className="text-2xl">{item.text}</h3>
                <span className="text-gray">
                  <RichText richText={item.description.json} onlyText />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[60%] hidden md:block">
          <div className="flex">
            {heroBanner.bottomCards.map((item: any, index: number) => (
              <div
                className="flex flex-col items-start gap-2 slideInLeft"
                style={{ animationDelay: animationDelay[index] }}
              >
                <Image src={item.icon.url} classWrapper="w-12" />
                <div className="">
                  <h3 className="text-2xl">{item.text}</h3>
                  <span className="text-gray">
                    <RichText richText={item.description.json} onlyText />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
