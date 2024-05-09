import { useCallback, useEffect, useState } from "react";

export const useScrollEvent = () => {
  if (typeof document == "undefined") {
    return { isHeaderVisible: null, activeLink: null, transparent: null };
  }
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const [transparent, setTransparent] = useState(true);
  const [yPos, setYPos] = useState(window.screenY);
  const allSections = document.querySelectorAll(".section");
  const header = document.querySelector("header") as HTMLElement;

  const handleScroll = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      const currentScrollPos = window.scrollY;

      const isScrollingUp = currentScrollPos < yPos;

      allSections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (
          currentScrollPos + header.clientHeight > sectionTop &&
          currentScrollPos < sectionBottom
        ) {
          setActiveLink(section.id);
        }
        if (
          index === 0 &&
          sectionTop - header.clientHeight > currentScrollPos
        ) {
          setActiveLink("");
        }
      });
      setTransparent(currentScrollPos <= 10);
      setIsHeaderVisible(isScrollingUp || currentScrollPos === 0);
      setYPos(currentScrollPos);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [yPos]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yPos]);

  return { isHeaderVisible, activeLink, transparent };
};
export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const getWindowWidth = () => {
      return typeof window !== "undefined" ? window.innerWidth : null;
    };

    setWindowWidth(getWindowWidth());

    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export const useScrollAnimation = (
  elementsRef: any,
  isAnimated: boolean[],
  setIsAnimated: any
): boolean[] => {
  useEffect(() => {
    const handleScroll = () => {
      elementsRef.current.forEach((element: any, index: number) => {
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (elementTop < windowHeight) {
            if (!isAnimated[index]) {
              setIsAnimated((prev: any) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementsRef, isAnimated, setIsAnimated]);

  return isAnimated;
};

export const useScrollAnimationForOne = (
  elementsRef: any,
  isAnimated: boolean,
  setIsAnimated: any
): boolean => {
  useEffect(() => {
    const handleScroll = () => {
      if (elementsRef.current) {
        const elementTop = elementsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          if (!isAnimated) {
            setIsAnimated(true);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementsRef, isAnimated, setIsAnimated]);

  return isAnimated;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    typeof window !== "undefined"
      ? getWindowDimensions()
      : { width: 0, height: 0 }
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
