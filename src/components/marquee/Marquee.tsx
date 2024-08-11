import React, { useRef, useEffect, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeInner = marqueeInnerRef.current;
    let animationFrameId: number;
    const speed = 1;

    const moveMarquee = () => {
      if (marquee && marqueeInner) {
        marquee.scrollLeft += speed;
        if (marquee.scrollLeft >= marqueeInner.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(moveMarquee);
    };

    moveMarquee();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="flex flex-nowrap overflow-hidden w-full whitespace-nowrap"
    >
      <div ref={marqueeInnerRef} className="inline-block">
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
