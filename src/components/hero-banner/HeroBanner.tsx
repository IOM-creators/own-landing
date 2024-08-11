import React from "react";
import cn from "classnames";
import Image from "../image";
import Poster from "../../assets/images/poster.png";
import Round from "../../assets/images/round.png";
import Video from "../video";
import RichText from "../rich-text";
import { useGetHeroBanner } from "@/graphql";
import Button from "../button";

interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = () => {
  const { heroBanner } = useGetHeroBanner();
  const {
    titleRichText,
    video,
    rIghtBlockText,
    callToActionLink,
    button,
    topRatedImage,
    jobSuccessImage,
    upworkLink,
  } = heroBanner;

  console.log("heroBanner", heroBanner, upworkLink);

  return (
    <div id="hero-banner" className={cn("text-dark-blue relative")}>
      <div className=" w-full h-screen relative grid grid-cols-1 lap:grid-cols-[_45%_55%] justify-center items-center">
        <div className="relative inset-0 justify-center w-full lap:pr-12">
          <div className=" custom-title text-left max-w-3xl lap:max-w-6xl">
            <RichText richText={titleRichText} />
          </div>
          {button?.url && (
            <Button
              styleButton={button.styleButton}
              typeButton={button.buttonType}
              className="justify-between max-w-[270px] w-full mt-14"
              icon={button.icon.url}
            >
              {button.title}
            </Button>
          )}
        </div>
        <div className="relative right-0 w-full h-full  hidden lap:block">
          {video?.url && (
            <Video
              src={video.url}
              poster={Poster.src}
              className="absolute w-[calc(100%-110px)] h-full top-0 left-0 object-cover"
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
              <Image src={Round.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8">
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

        <div className=" grid grid-cols-2 gap-4 mt-5">
          {jobSuccessImage && (
            <div className="flex items-center">
              <Image
                onlyImg
                className="w-6 mr-2.5"
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
              ></Image>
              {topRatedImage.title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
