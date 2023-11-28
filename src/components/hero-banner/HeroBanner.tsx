import React from "react";
import { TypeAnimation } from "react-type-animation";
import cn from "classnames";
import styles from "./hero-banner.module.scss";
import { useGetHeroBanner } from "../../graphql";
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

  const letters: ILetter[] =
    heroBanner.abbreviation.map((text: any, index: number) => ({
      letter: text.slice(0, 1),
      fullText: `- ${text}`,
      delay: index * 5 * 250,
    })) || [];
  return (
    <section id="hero-banner" className="overflow-hidden text-white">
      <div className="relative w-full h-screen">
        <div id="pt" className={cn(styles.canvas)}>
          <canvas id="canvas" width="973" height="1048"></canvas>
        </div>
        <div className="absolute inset-0 flex flex-col items-left justify-center container mx-lg">
          <div className="text-left max-w-3xl lap:max-w-6xl">
            <h1>
              {letters.map((item: ILetter, index: number) => {
                return (
                  <template
                    className="flex my-3 md:my-6 text-xl md:text-5xl"
                    key={index}
                  >
                    {!showAnimation && (
                      <span className="mr-2">
                        {item.letter} {item.fullText}
                      </span>
                    )}
                    {showAnimation && (
                      <span className="mr-2">{item.letter}</span>
                    )}
                    {showAnimation && (
                      <TypeAnimation
                        key={index}
                        sequence={["", item.delay, `${item.fullText}`]}
                        speed={50}
                        cursor={false}
                      />
                    )}
                  </template>
                );
              })}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
