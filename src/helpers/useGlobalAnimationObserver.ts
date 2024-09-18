import { useEffect } from "react";
import { useRouter } from "next/router";

export const useGlobalAnimationObserver = () => {
  const router = useRouter();

  const initObserver = () => {
    const blocks = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (blocks.length === 0) return; // Ensure there are elements to observe

    console.log("blocks", blocks);

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          // Delay adding the class for a staggered effect
          setTimeout(() => {
            target.classList.add("visible");
            target.dataset.time = (index * 300).toString();
          }, index * 300);

          // Stop observing the element once it is visible
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each block
    blocks.forEach((block) => observer.observe(block));

    // Handle sections already in the viewport on load
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

    // Return a cleanup function to disconnect the observer
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
        // Retry if no elements are found
        setTimeout(() => checkContentAndInit(100), 100);
      }
    }, delay);
  };

  useEffect(() => {
    let cleanupObserver: (() => void) | null = null;

    // Initial content check on mount or reload
    checkContentAndInit();

    const handleRouteChangeComplete = () => {
      // Clean up previous observer
      if (cleanupObserver) cleanupObserver();

      // Delay checking content on route change to ensure content is loaded
      setTimeout(() => {
        checkContentAndInit(300); // Delay initialization slightly to allow content to load
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
