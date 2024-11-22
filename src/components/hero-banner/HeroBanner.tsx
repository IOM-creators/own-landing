import React, { useMemo } from "react";
import cn from "classnames";
import Image from "../image";
import Poster from "../../assets/images/poster.png";
import Round from "../../assets/images/round.png";
import Video from "../video";
import RichText from "../rich-text";
import Button from "../button";
import { motion } from "framer-motion";

interface IHeroSection {
  section: any;
}

const HeroSection: React.FC<IHeroSection> = ({ section }) => {
  const { heroBanner } = section;
  const memoizedHeroBanner = useMemo(() => {
    if (!heroBanner) return {};

    return {
      titleRichText: heroBanner.titleRichText.json,
      video: heroBanner.video,
      rIghtBlockText: heroBanner.rIghtBlockText,
      callToActionLink: heroBanner.callToActionLink,
      button: heroBanner.button,
      topRatedImage: heroBanner.topRatedImage,
      jobSuccessImage: heroBanner.jobSuccessImage,
      upworkLink: heroBanner.upworkLink,
    };
  }, [heroBanner]);

  const {
    titleRichText,
    video,
    rIghtBlockText,
    callToActionLink,
    button,
    topRatedImage,
    jobSuccessImage,
    upworkLink,
  } = memoizedHeroBanner;
  return (
    <div id="hero-banner" className={cn("text-dark-blue relative")}>
      <div className=" w-full h-screen relative grid grid-cols-1 lap:grid-cols-[_45%_55%] justify-center items-center">
        <div className="relative inset-0 justify-center w-full lap:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=" custom-title text-left max-w-3xl lap:max-w-6xl"
          >
            <RichText richText={titleRichText} />
          </motion.div>
          {button?.url && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Button
                styleButton={button.styleButton}
                typeButton={button.buttonType}
                className="justify-between max-w-[270px] w-full mt-14"
                icon={button.icon.url}
              >
                {button.title}
              </Button>
            </motion.div>
          )}
        </div>
        <div className="relative right-0 w-full h-full  hidden lap:block">
          {video?.url && (
            <Video
              src={video.url}
              poster={Poster.src}
              className="absolute w-[calc(100%-110px)] h-full top-0 left-0 !object-cover"
              section={video}
            />
          )}

          <div className="flex flex-col	justify-end absolute right-0  top-0 max-w-[30%] w-full h-[40%] bg-primary-green text-white p-8">
            <span className="text-xl font-bold">{rIghtBlockText}</span>
            {callToActionLink?.url && (
              <Button
                styleButton={callToActionLink.styleButton}
                typeButton={callToActionLink.buttonType}
                className="text-xl pt-2 min-w-0 justify-start"
                classNameIcon="ml-4"
                icon={callToActionLink.icon.url}
              >
                {callToActionLink?.title}
              </Button>
            )}
            <div className="absolute right-0 top-0 w-2/3">
              <Image src={Round.src} alt="Hero banner" />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {upworkLink?.url && (
          <Button
            link={upworkLink.url}
            className="flex items-center text-xl font-bold"
            styleButton={upworkLink.styleButton}
            typeButton={upworkLink.buttonType}
            icon={upworkLink.icon.url}
          >
            {upworkLink.title}
          </Button>
        )}

        <div className="grid grid-cols-2 gap-4 mt-5">
          {jobSuccessImage && (
            <div className="flex items-center">
              <Image
                onlyImg
                className="w-6 mr-2.5"
                alt="Job Success"
                src={jobSuccessImage.url}
              ></Image>
              {jobSuccessImage.title}
            </div>
          )}
          {topRatedImage && (
            <div className="flex items-center">
              <Image
                onlyImg
                className="w-6 mr-2.5"
                src={topRatedImage.url}
                alt="Top Rated"
              ></Image>
              {topRatedImage.title}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
