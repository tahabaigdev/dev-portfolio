// src/components/Loader.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete(); // Notify parent to hide loader
      },
    });

    // Animate text fade in and slide up
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
    ).to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-[#efeeea] px-[2rem]"
    >
      <div className="noise"></div>
      <p
        ref={textRef}
        className="max-w-[60rem] text-left text-[2rem] leading-[3rem] font-medium md:text-[3rem] md:leading-[4rem]"
      >
        Believe in your journey, even when the path is unclear.
        <span className="mt-[1rem] flex justify-end text-[1.8rem] font-normal italic">
          __tahabaig
        </span>
      </p>
    </div>
  );
};

export default Loader;
