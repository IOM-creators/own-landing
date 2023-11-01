import React from "react";
import { TypeAnimation } from "react-type-animation";
import cn from "classnames";
import styles from "./hero-banner.module.scss";
import { useTranslation } from "react-i18next";
interface ILetter {
  letter: string;
  fullText: string;
  delay: number;
}

interface IHeroSection {
  showAnimation?: boolean;
}

const HeroSection: React.FC<IHeroSection> = ({ showAnimation = false }) => {
  const { t } = useTranslation();
  const letters: ILetter[] = [
    {
      letter: t("hero_banner.letter_1"),
      fullText: t("hero_banner.text_1"),
      delay: 1000,
    },
    {
      letter: t("hero_banner.letter_2"),
      fullText: t("hero_banner.text_2"),
      delay: 3000,
    },
    {
      letter: t("hero_banner.letter_3"),
      fullText: t("hero_banner.text_3"),
      delay: 5000,
    },
  ];
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
