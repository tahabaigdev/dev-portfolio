// components/animations/MaskReveal.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MaskRevealProps {
  children: React.ReactNode;
  triggerStart?: string; // e.g., "top 80%"
  duration?: number;
}

const MaskReveal: React.FC<MaskRevealProps> = ({
  children,
  triggerStart = "top 70%",
  duration = 10,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          WebkitMaskPosition: "100% 0",
          maskPosition: "100% 0",
        },
        {
          WebkitMaskPosition: "0% 0",
          maskPosition: "0% 0",
          duration,
          ease: "expo.out",
          scrollTrigger: {
            trigger: element,
            start: triggerStart,
            toggleActions: "play none none none", // animate once
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [triggerStart, duration]);

  return (
    <div ref={wrapperRef} className="mask-reveal inline-block w-full">
      {children}
    </div>
  );
};

export default MaskReveal;
