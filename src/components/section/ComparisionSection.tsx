import { ArrowRight, Check } from "lucide-react";
import SectionDescription from "../ui/SectionDescription";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import { Button } from "../ui/button";

import InfiniteMarquee from "../ui/InfiniteMarquee";
import { useLenisScroll } from "@/hooks/useLenis";

const features = [
  "Custom, high-performance web solutions",
  "Pixel-perfect UI/UX design",
  "Problem Solver",
  "Seamless animations & interactions",
  "Scalable & future-proof solutions",
  "Optimized for speed & conversions",
  "Advanced SEO tactics for enhanced visibility",
];

const drawbacks = [
  "Generic templates",
  "Basic design skills",
  "Limited customization",
  "Slow performance",
  "Lacks scalability",
  "Static & unengaging layouts",
];

const ComparisionSection = () => {
  const lenisRef = useLenisScroll();

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();

    const target = document.querySelector(link) as HTMLElement | null;
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -50 });

      // ✅ Update URL without reloading
      window.history.pushState(null, "", link);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-[8rem]">
      <div className="absolute top-[-.2rem] right-[10rem]">
        <img
          src="/images/shape-icon-01.svg"
          alt="Icon"
          className="object-contain object-center"
        />
      </div>

      <div className="absolute bottom-[-.2rem] left-[10rem]">
        <img
          src="/images/shape-icon-01.svg"
          alt="Icon"
          className="rotate-180 object-contain object-center"
        />
      </div>

      <div className="container">
        <div className="flex flex-col gap-[.8rem]">
          <div>
            <SectionLabel label="Comparision" />
          </div>

          <div className="flex flex-col items-start justify-between gap-[1rem] lg:flex-row lg:gap-[0rem]">
            <SectionTitle label="Proven Difference" />

            <div className="md:max-w-[60rem] lg:max-w-[45rem]">
              <SectionDescription desc="What sets me apart is precision, performance, and purpose—delivering clean code, modern UI, and results that exceed expectations every time." />
            </div>
          </div>
        </div>

        <div className="my-[4.4rem] flex flex-col items-start justify-center gap-[2.4rem] md:flex-row">
          <div className="flex w-full flex-col gap-[2.4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[3.2rem] md:w-[36.8rem]">
            <h4 className="text-center text-[3.6rem] leading-[4.32rem]">Me</h4>

            <hr className="w-full border-[1px] border-dashed border-[#051A2F] opacity-30" />

            <ul className="flex flex-col gap-[1.6rem]">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="white flex items-center gap-[.8rem] text-[1.3rem]"
                >
                  <Check className="size-[1.6rem]" /> <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="w-full">
              <Button
                onClick={(e) => handleNavClick(e, "#contact")}
                asChild
                className="w-full"
              >
                <a href="#contact">
                  <ArrowRight className="size-[1.6rem] -rotate-45 transition-all duration-200 group-hover:rotate-0" />
                  <span>Contact Me</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[2.4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[3.2rem] md:w-[36.8rem]">
            <h4 className="text-center text-[3.6rem] leading-[4.32rem]">
              Others
            </h4>

            <hr className="w-full border-[1px] border-dashed border-[#051A2F] opacity-30" />

            <ul className="flex flex-col gap-[1.6rem]">
              {drawbacks.map((item, idx) => (
                <li
                  key={idx}
                  className="white flex items-center gap-[.8rem] text-[1.3rem]"
                >
                  <Check className="size-[1.6rem]" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <InfiniteMarquee />
        </div>
      </div>
    </section>
  );
};

export default ComparisionSection;
