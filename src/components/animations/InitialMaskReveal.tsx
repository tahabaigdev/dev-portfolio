// components/animations/InitialMaskReveal.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface InitialMaskRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const InitialMaskReveal: React.FC<InitialMaskRevealProps> = ({
  children,
  delay = 0.2,
  duration = 5,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          WebkitMaskPosition: "100% 0",
          maskPosition: "100% 0",
        },
        {
          WebkitMaskPosition: "0% 0",
          maskPosition: "0% 0",
          duration,
          delay,
          ease: "expo.out",
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [delay, duration]);

  return (
    <div ref={wrapperRef} className="mask-reveal inline-block w-full">
      {children}
    </div>
  );
};

export default InitialMaskReveal;
