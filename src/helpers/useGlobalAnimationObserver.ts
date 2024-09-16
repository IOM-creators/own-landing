import { useEffect } from "react";
import { useRouter } from "next/router";

export const useGlobalAnimationObserver = () => {
  const router = useRouter();

  const initObserver = () => {
    const blocks = document.querySelectorAll<HTMLElement>("[data-animate]");
    console.log("blocks", blocks);

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
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

    blocks.forEach((block) => {
      const target = block as HTMLElement;
      const rect = target.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        target.classList.add("visible");
        target.dataset.time = (blocks.length * 300).toString();
      }
    });

    return () => {
      blocks.forEach((block) => observer.unobserve(block));
    };
  };

  useEffect(() => {
    const checkContent = () => {
      const blocks = document.querySelectorAll<HTMLElement>("[data-animate]");
      if (blocks.length > 0) {
        initObserver();
      } else {
        setTimeout(checkContent, 100);
      }
    };

    checkContent();

    const handleRouteChange = () => {
      checkContent();
      initObserver();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
