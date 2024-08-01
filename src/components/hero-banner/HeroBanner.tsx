import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import Image from "../image";
import Icon from "../icon";
import Link from "next/link";
import Poster from "../../assets/images/poster.png";
import Round from "../../assets/images/round.png";
import Video from "../video";
import RichText from "../rich-text";
import { useGetHeroBanner } from "@/graphql";
import Button from "../button";

interface IHeroSection { }

const HeroSection: React.FC<IHeroSection> = () => {
  const { heroBanner } = useGetHeroBanner();
  const { titleRichText, video, callToActionLink, button, topRatedImage, jobSuccessImage, upworkLink } = heroBanner
  console.log('upworkLink', heroBanner);

  return (
    <div id="hero-banner" className={cn("text-dark-blue")}>
      <div className=" w-full h-screen relative grid grid-cols-1 lap:grid-cols-[_45%_55%] justify-center items-center">
        <div className="relative inset-0 justify-center w-full lap:pr-12">
          <div className=" custom-title text-left max-w-3xl lap:max-w-6xl">
            <RichText richText={titleRichText} />
          </div>
          {button?.url && <Button
            primary
            link={button.url}
            className="btn btn--primary justify-between group max-w-[270px] w-full mt-14"
            classNameIcon="group-hover:translate-x-2 transition-transform duration-300"
            typeButton="button"
            icon={button.icon.url}
          >
            {button.title}
          </Button>}
        </div>
        <div className="relative right-0 w-full h-full  hidden lap:block">
          {video?.url && <Video
            src={video.url}
            poster={Poster.src}
            className="absolute w-[calc(100%-110px)] h-full top-0 left-0 object-cover"
          />}
          <div className="flex flex-col	justify-end absolute right-0  top-0 max-w-[30%] w-full h-[40%] bg-primary-green text-white p-8">
            {callToActionLink?.url && <Button
              secondary
              link={callToActionLink.url}
              className="flex items-center   text-xl font-bold"
              classNameIcon="ml-4 group-hover:translate-x-2 transition-transform duration-300"
              typeButton="link"
              icon={callToActionLink.icon.url}
            >
              <h6 className="font-bold text-lg">
                {callToActionLink?.title}
              </h6>
            </Button>}
            <div className="absolute right-0 top-0 w-2/3">
              <Image src={Round.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8">
        {upworkLink?.url && <Button
          secondary
          link={upworkLink.url}
          className="flex items-center   text-xl font-bold"
          typeButton="link"
          icon={upworkLink.icon.url}
        >
          {upworkLink.title}
        </Button>}

        <div className=" grid grid-cols-2 gap-4 mt-5">
          {jobSuccessImage && <div className="flex items-center">
            <Image onlyImg className="w-6 mr-2.5" src={jobSuccessImage.url}></Image>
            {jobSuccessImage.title}
          </div>}
          {topRatedImage && <div className="flex items-center">
            <Image onlyImg className="w-6 mr-2.5" src={topRatedImage.url}></Image>
            {topRatedImage.title}
          </div>}

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
