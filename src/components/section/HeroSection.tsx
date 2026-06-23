import { ArrowDown } from "lucide-react";
import AvailableBadge from "../ui/AvailableBadge";
import { Button } from "../ui/button";
import { useLenisScroll } from "@/hooks/useLenis";

const HeroSection = () => {
  const HeadingText = "Hi, I’m Taha,\na frontend developer";
  const lenisRef = useLenisScroll();

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();

    const target = document.querySelector(link) as HTMLElement | null;
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -50 });
    }
  };

  return (
    <section id="home" className="flex min-h-screen items-center">
      <div className="container px-[2rem]">
        <div className="flex flex-col items-center text-center">
          <AvailableBadge />

          <h1 className="mt-[1.5rem] text-[3rem] leading-[3.5rem] font-normal whitespace-pre-wrap md:mt-[1rem] md:text-[7rem] md:leading-[8rem] lg:text-[9.6rem] lg:leading-[10.5rem] lg:tracking-[0.7px]">
            {HeadingText.split("").map((char, idx) => (
              <span
                key={idx}
                className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.2)]"
              >
                {char}
              </span>
            ))}
          </h1>

          <p className="mt-[2rem] mb-[3rem] text-[1.4rem] font-light opacity-85 md:mt-[3rem] md:mb-[4rem] md:text-[2.2rem] md:leading-[3.3rem] md:tracking-[-0.3px] lg:max-w-[80%]">
            I build optimized, accessible websites and web apps using modern
            frontend tools focused on clean code, responsive design, and a
            seamless user experience.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-[.5rem] px-[4rem] md:flex-row">
            <Button asChild>
              <a href="/resume/tb-resume.pdf" target="_blank">
                Download Resume
              </a>
            </Button>

            <Button variant="dark" onClick={(e) => handleNavClick(e, "#work")}>
              <span>Scroll Down</span>
              <ArrowDown className="size-[1.6rem] -rotate-45 transition-all duration-200 group-hover:rotate-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
