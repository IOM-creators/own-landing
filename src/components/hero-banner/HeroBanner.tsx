import React from "react";
import { TypeAnimation } from "react-type-animation";
import cn from "classnames";
import styles from "./hero-banner.module.scss";

interface ILetter {
  letter: string;
  fullText: string;
  delay: number;
}

interface IHeroSection {
  showAnimation?: boolean;
}
const letters: ILetter[] = [
  {
    letter: "I",
    fullText: "- Interactive Web Development",
    delay: 1000,
  },
  {
    letter: "O",
    fullText: "- Optimized Code Efficiency",
    delay: 3000,
  },
  {
    letter: "M",
    fullText: "- Modern Framework Proficiency",
    delay: 5000,
  },
];

const HeroSection: React.FC<IHeroSection> = ({ showAnimation = false }) => {
  return (
    <section id="hero-banner" className={cn(styles["hero-banner"])}>
      <div className="relative w-full h-screen">
        <div id="pt" className={cn(styles.canvas)}>
          <canvas id="canvas" width="973" height="1048"></canvas>
        </div>
        <div className="absolute inset-0 flex flex-col items-left justify-center container mx-lg">
          <div className="text-left max-w-3xl lap:max-w-6xl">
            {letters.map((item: ILetter, index: number) => {
              return (
                <div
                  className="flex mb-3 text-xl sm:text-3xl md:text-4xl lg:text-5xl"
                  key={index}
                >
                  {!showAnimation && (
                    <span className="mr-2">
                      {item.letter} {item.fullText}
                    </span>
                  )}
                  {showAnimation && <span className="mr-2">{item.letter}</span>}
                  {showAnimation && (
                    <TypeAnimation
                      sequence={["", item.delay, `${item.fullText}`]}
                      speed={50}
                      cursor={false}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
