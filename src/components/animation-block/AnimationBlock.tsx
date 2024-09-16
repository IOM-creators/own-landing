import { ReactNode, useEffect } from "react";

interface IAnimateBlock {
  animationType?: string;
  children: ReactNode;
}

const AnimateBlock: React.FC<IAnimateBlock> = ({
  children,
  animationType = "",
}) => {
  useEffect(() => {
    // Ensure the code runs only on the client-side
    if (typeof window === "undefined") return;

    // Select all elements with the data-animate attribute
    const blocks = document.querySelectorAll<HTMLElement>("[data-animate]");

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const target = entry.target as HTMLElement;
            target.classList.add("visible");
            target.dataset.time = (index * 300).toString();
          }, index * 300);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    blocks.forEach((block) => observer.observe(block));

    // Clean up observer on component unmount
    return () => {
      blocks.forEach((block) => observer.unobserve(block));
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div data-animate={animationType}>{children}</div>;
};

export default AnimateBlock;
