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

interface IHeroSection { }

const HeroSection: React.FC<IHeroSection> = () => {
  const { heroBanner } = useGetHeroBanner();
  const { titleRichText, video, callToActionLink, button } = heroBanner

  return (
    <div id="hero-banner" className={cn(styles.heroSection, "text-dark-blue")}>
      <div className="relative w-full h-screen relative grid grid-cols-1 lap:grid-cols-[_45%_55%] justify-center items-center">
        <div className="relative inset-0 justify-center w-full lap:pr-12">
          <div className="[&.h1] custom-title text-left max-w-3xl lap:max-w-6xl">
            <RichText richText={titleRichText} />
          </div>
          <Link
            href="/"
            className="btn btn--primary justify-between group max-w-[270px] w-full text-lg font-bold text-white mt-14"
          >
            Get Started
            <Icon
              icon="left-arrow"
              className="group-hover:translate-x-2 transition-transform duration-300"
              strokeClass="stroke-white"
            />
          </Link>
        </div>
        <div className="relative right-0 w-full h-full  hidden lap:block">
          {video?.url && <Video
            src={video.url}
            poster={Poster.src}
            className="absolute w-[calc(100%-110px)] h-full top-0 left-0 object-cover"
          />}
          <div className="flex flex-col	justify-end absolute right-0  top-0 max-w-[30%] w-full h-[40%] bg-green text-white p-8">

            {callToActionLink && <Link href={callToActionLink?.url} className="group text-sm mt-8 flex items-center">
              {callToActionLink?.title && <h6 className="font-bold text-lg">
                {callToActionLink?.title}
              </h6>}
              <Icon
                icon="left-arrow"
                className="ml-4 group-hover:translate-x-2 transition-transform duration-300"
                strokeClass="stroke-white"
              />
            </Link>}

            <div className="absolute right-0 top-0 w-2/3">
              <Image src={Round.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8">
        <Link href="/" className="flex items-center  text-xl font-bold">
          Check Us Out on <Icon icon="upwork" className="ml-2" />
        </Link>
        <div className=" grid grid-cols-2 gap-4 mt-5">
          <div className="flex items-center">
            <Icon icon="upwork-rated" className="mr-2" />
            100% Job Success
          </div>
          <div className="flex items-center">
            <Icon icon="upwork-job" className="mr-2" />
            Top Rated
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
