import React from "react";
import { TypeAnimation } from "react-type-animation";
import cn from "classnames";
import styles from "./hero-banner.module.scss";
import { useI18n } from "../../helpers/i18nContext";
interface ILetter {
  letter: string;
  fullText: string;
  delay: number;
}

interface IHeroSection {
  showAnimation?: boolean;
}

const HeroSection: React.FC<IHeroSection> = ({ showAnimation = false }) => {
  const { t, detectKey } = useI18n();

  const letters: ILetter[] = [
    {
      letter: t("hero_banner.letter_1"),
      fullText: t("hero_banner.text_1"),
      delay: 250,
    },
    {
      letter: t("hero_banner.letter_2"),
      fullText: t("hero_banner.text_2"),
      delay: 1500,
    },
    {
      letter: t("hero_banner.letter_3"),
      fullText: t("hero_banner.text_3"),
      delay: 2750,
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
                    key={detectKey + index}
                  >
                    {!showAnimation && (
                      <span className="mr-2">
                        {item.letter} {item.fullText}
                      </span>
                    )}
                    {showAnimation && <span className="mr-2">{item.letter}</span>}
                    {showAnimation && (
                      <TypeAnimation
                        key={detectKey + index}
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
