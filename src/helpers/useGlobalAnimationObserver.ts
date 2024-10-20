import { useEffect } from "react";
import { useRouter } from "next/router";

export const useGlobalAnimationObserver = () => {
  const router = useRouter();

  const initObserver = (): (() => void) | null => {
    const blocks = document.querySelectorAll<HTMLElement>("[data-animate]");

    if (blocks.length === 0) return null;
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          setTimeout(() => {
            target.classList.add("visible");
            target.dataset.time = (index * 300).toString();
          }, index * 300);

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    blocks.forEach((block) => observer.observe(block));

    blocks.forEach((block, index) => {
      const target = block as HTMLElement;
      const rect = target.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setTimeout(() => {
          target.classList.add("visible");
          target.dataset.time = (index * 300).toString();
        }, index * 300);
      }
    });

    return () => {
      blocks.forEach((block) => observer.unobserve(block));
    };
  };

  const checkContentAndInit = (delay: number = 100) => {
    setTimeout(() => {
      const blocks = document.querySelectorAll<HTMLElement>("[data-animate]");
      if (blocks.length > 0) {
        initObserver();
      } else {
        setTimeout(() => checkContentAndInit(100), 100);
      }
    }, delay);
  };

  useEffect(() => {
    let cleanupObserver: (() => void) | null = null;

    checkContentAndInit();

    const handleRouteChangeComplete = () => {
      if (cleanupObserver) cleanupObserver();

      setTimeout(() => {
        cleanupObserver = initObserver();
        checkContentAndInit(300);
      }, 300);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      // Cleanup on unmount
      if (cleanupObserver) cleanupObserver();
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);
};
