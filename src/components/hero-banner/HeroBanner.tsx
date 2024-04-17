import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useGetHeroBanner } from "../../graphql";
import styles from "./styles.module.scss";
import cn from "classnames";
import Icon from "../icon";

interface ILetter {
  letter: string;
  fullText: string;
  delay: number;
}

interface IHeroSection {
  showAnimation?: boolean;
}

const HeroSection: React.FC<IHeroSection> = ({ showAnimation = false }) => {
  const { heroBanner } = useGetHeroBanner();
  const bullets = Array.from({ length: 4 }, () =>
    Array.from({ length: 8 }, (_, index) => index + 1)
  );

  return (
    <section
      id="hero-banner"
      className={cn(styles.heroSection, "overflow-hidden text-dark-blue")}
    >
      <div className="relative w-full h-screen relative flex justify-between container">
        <div className="relative inset-0 flex flex-col items-left justify-center mx-lg">
          <div className="text-left max-w-3xl lap:max-w-6xl">
            <h1 className="text-3xl leading-[4rem] font-bold">
              <span className="text-blue text-5xl">Innovative</span> Development
              Solutions
              <br />
              <span className="text-blue text-5xl">Optimized</span> Code
              Efficiency
              <br />
              <span className="text-blue text-5xl">Mastery</span> in Modern
              Frameworks
            </h1>
          </div>
        </div>
        <div
          className={cn(
            styles.heroBanner,
            "relative right-0 top-1/2 translate-y-[-50%]  w-[50%] h-[50%] ml-20"
          )}
        >
          <div className="absolute top-1/2  left-0 translate-x-[50%]  grid grid-cols-4 gap-4 z-10 opacity-90">
            {bullets.map((tr) => (
              <div className="grid gap-4">
                {tr.map((td) => (
                  <div className="bg-gray-light w-2 h-2 rounded-full"></div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute top-0 bg-contain  bg-no-repeat bg-hero-img-1 bg-center  w-full h-full"></div>
          <div className="absolute top-0 bg-contain  bg-no-repeat bg-hero-img-2 w-full h-full bg-center z-[-1]"></div>
          <div className="absolute top-0 translate-y-[-50%] rotate-90 right-1/2 translate-x-[50%]  grid grid-cols-4 gap-4 z-10 opacity-90">
            {bullets.map((tr) => (
              <div className="grid gap-4">
                {tr.map((td) => (
                  <div className="bg-gray-light w-2 h-2 rounded-full"></div>
                ))}
              </div>
            ))}
          </div>

          <div className="absolute top-[20%] bg-white shadow-primary rounded-lg left-0 info-block p-4 flex items-center">
            <Icon icon="projects" />
            <div className="ml-4">
              <h3 className="text-2xl">26+</h3>
              <span className="text-gray">Projects</span>
            </div>
          </div>
          <div className="absolute top-1/2 translate-y-[-50%] bg-white shadow-primary rounded-lg right-0 info-block p-4 flex items-center">
            <Icon icon="star" className="fill-green" />
            <div className="ml-4">
              <h3 className="text-2xl">5</h3>
              <span className="text-gray">Satisfaction</span>
            </div>
          </div>
          <div className="absolute bottom-0 bg-white shadow-primary rounded-lg left-1/2 translate-x-[-50%] info-block p-4 flex items-center">
            <Icon icon="account" />
            <div className="ml-4">
              <h3 className="text-2xl">Product Designer</h3>
              <span className="text-gray">5 Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
