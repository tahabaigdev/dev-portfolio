// src/hooks/useLenisScroll.ts
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import type { LenisOptions } from "@/types/lenis";

export const useLenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const options: LenisOptions = {
      smooth: true,
    };

    const lenis = new Lenis(options);
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};
