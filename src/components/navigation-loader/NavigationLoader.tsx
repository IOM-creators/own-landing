import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import { HeaderState } from "@/store/types/header";

const LOADER_THRESHOLD = 250;

const NavigationLoader = (props: any) => {
  const { height }: HeaderState = useTypedSelector((state) => state.header);
  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let timer: any;

    const startLoading = () => {
      timer = setTimeout(() => setLoading(true), LOADER_THRESHOLD);
    };

    const stopLoading = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setLoading(false);
    };

    const handleRouteChangeStart = () => {
      setProgress(0);
      startLoading();
    };

    const handleRouteChangeComplete = () => {
      setProgress(100);
      stopLoading();
    };

    const handleRouteChangeError = () => {
      setProgress(100);
      stopLoading();
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
      stopLoading();
    };
  }, []);

  useEffect(() => {
    let progressInterval: any;
    if (isLoading) {
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
      }, 100);
    } else {
      clearInterval(progressInterval);
    }

    return () => clearInterval(progressInterval);
  }, [isLoading]);

  return isLoading ? (
    <div
      style={{ top: `${height}px` }}
      className="absolute top-0 left-0 w-full h-full bg-white z-50"
    >
      <div
        className="h-1 bg-blue absolute left-0"
        style={{
          width: `${progress}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
    </div>
  ) : null;
};

export default NavigationLoader;
