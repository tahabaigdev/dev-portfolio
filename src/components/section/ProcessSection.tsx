import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import { useLenisScroll } from "@/hooks/useLenis";

const processItems = [
  {
    step: "01",
    title: "Understand Goals",
    desc: "We start by learning about your objectives, audience, and challenges to set a clear direction for the work ahead.",
  },
  {
    step: "02",
    title: "Plan Approach",
    desc: "A clear structure is created with defined steps, timelines, and priorities to keep the process efficient and focused.",
  },
  {
    step: "03",
    title: "Design & Develop",
    desc: "Visuals and functionality come together to create a clean, responsive solution that works smoothly across all devices.",
  },
  {
    step: "04",
    title: "Launch & Improve",
    desc: "Once live, we monitor performance, gather insights, and make updates to keep your product effective and up to date.",
  },
];

const ProcessSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section className="py-[6rem]">
      <div className="container">
        <div className="flex flex-col gap-[.8rem]">
          <div>
            <SectionLabel label="Process" />
          </div>

          <div className="flex flex-col items-start justify-between gap-[1rem] lg:flex-row lg:gap-[0rem]">
            <SectionTitle label="Working Method" />

            <div className="md:max-w-[60rem] lg:max-w-[45rem]">
              <SectionDescription desc="A streamlined approach from ideation to launch — our process ensures clarity, collaboration, and quality at every step of your project." />
            </div>
          </div>
        </div>

        <div className="my-[4.4rem] flex flex-col justify-between gap-[1.6rem] lg:flex-row">
          {processItems.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const isDefaultOpen = hoveredIndex === null && idx === 0;

            const isOpen = isHovered || isDefaultOpen;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={clsx(
                  "shadow-02 group flex h-[33rem] flex-col justify-between overflow-hidden rounded-[.8rem] bg-white p-[2.8rem] transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)] md:h-[32rem] lg:h-[40rem]",
                  isOpen
                    ? "w-full opacity-100 lg:w-[48.8rem]"
                    : "w-full opacity-70 lg:w-[24rem]",
                )}
              >
                <div className="flex flex-col gap-[2.4rem]">
                  <div className="shadow-01 flex size-[4rem] items-center justify-center rounded-[.8rem] bg-(--base-color-01) font-medium text-white">
                    <span>{item.step}</span>
                  </div>

                  <h4 className="text-[2.4rem] leading-[3rem] font-medium">
                    {item.title}
                  </h4>
                </div>

                <div
                  className={clsx(
                    "flex min-w-full flex-col gap-[2.4rem] transition-all duration-500 lg:min-w-[30rem] xl:min-w-[35rem]",
                    isOpen ? "opacity-100" : "opacity-0",
                  )}
                >
                  <p className="text-[1.4rem] leading-[2.2rem] md:text-[1.6rem] md:leading-[2.4rem]">
                    {item.desc}
                  </p>

                  <hr className="w-full border-[1px] border-dashed border-[#051A2F] opacity-30" />

                  <div className="text-end">
                    <span className="inline-flex rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[1rem] py-[.4rem] text-[1.4rem] leading-[2.24rem] font-medium">
                      <span>step </span>
                      {item.step}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-[1.6rem]">
          <Button
            onClick={(e) => handleNavClick(e, "#work")}
            asChild
            variant="dark"
          >
            <a href="#work">
              <span>See Projects</span>{" "}
              <ArrowRight className="size-[1.6rem] transition-all duration-200" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
