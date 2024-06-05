import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import Image from "../image";
import Icon from "../icon";
import RichText from "../rich-text";
import Link from "next/link";
import Poster from "../../assets/images/poster.png";
import Round from "../../assets/images/round.png";

interface ILetter {
  letter: string;
  fullText: string;
  delay: number;
}

interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = () => {
  return (
    <div id="hero-banner" className={cn(styles.heroSection, "text-dark-blue")}>
      <div className="relative w-full h-screen relative grid grid-cols-1 lap:grid-cols-[_45%_55%] justify-center items-center">
        <div className="relative inset-0 justify-center w-full lap:pr-12">
          <div className="text-left max-w-3xl lap:max-w-6xl">
            <h1 className="text-5xl  md:text-7xl md:leading-[4rem]  font-bold">
              Transforming{" "}
              <i className="font-normal fraunces italic text-green">Ideas</i>{" "}
              into{" "}
              <i className="font-normal fraunces italic text-green">Digital</i>{" "}
              Masterpieces
            </h1>
          </div>
          <Link
            href="/"
            className="flex items-center justify-between bg-orange group hover:bg-orange-dark  transition-colors py-4 px-6 md:py-7 md:px-9 max-w-[270px] w-full text-lg font-bold text-white mt-14"
          >
            Get Started{" "}
            <Icon
              icon="left-arrow"
              className="group-hover:translate-x-2 transition-transform duration-300"
              strokeClass="stroke-white"
            />
          </Link>
        </div>
        <div className="relative right-0 w-full h-full  hidden lap:block">
          <video
            src="hero-banner.mp4"
            poster={Poster.src}
            autoPlay
            muted
            playsInline
            style={{ filter: `url(${Poster.src})` }}
            className="absolute w-[calc(100%-110px)] h-full top-0 left-0 object-cover"
          ></video>
          <div className="flex flex-col	justify-end absolute right-0  top-0 max-w-[30%] w-full h-[40%] bg-green text-white p-8">
            <h6 className="font-bold text-lg">
              Start grow your business with IOM
            </h6>
            <Link href="/" className="group text-sm mt-8 flex items-center">
              Book Meeting{" "}
              <Icon
                icon="left-arrow"
                className="ml-4 group-hover:translate-x-2 transition-transform duration-300"
                strokeClass="stroke-white"
              />
            </Link>
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
            98% Job Success
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
