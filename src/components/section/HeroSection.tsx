import { ArrowRight } from "lucide-react";
import AvailableBadge from "../ui/AvailableBadge";
import { Button } from "../ui/button";

const clients = [
  { src: "/images/abubakar.webp", alt: "Client 1" },
  { src: "/images/asim.webp", alt: "Client 2" },
  { src: "/images/client-05.avif", alt: "Client 3" },
  { src: "/images/client-04.avif", alt: "Client 4" },
  { src: "/images/chandeep.webp", alt: "Client 5" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center pt-[13rem] pb-[8rem] lg:pt-[12rem] lg:pb-[10rem] xl:pt-[15rem] xl:pb-[15rem]"
    >
      <div className="container px-[2rem]">
        <div className="flex flex-col items-center text-center">
          <AvailableBadge />

          <h1 className="mt-[1.5rem] text-[3rem] leading-[3.5rem] font-normal md:mt-[1rem] md:text-[7rem] md:leading-[8rem] lg:text-[9.6rem] lg:leading-[10.5rem] lg:tracking-[0.7px]">
            Hi, I’m Taha, <br /> a frontend engineer
          </h1>

          <p className="mt-[2rem] mb-[3rem] text-[1.4rem] font-light opacity-85 md:mt-[3rem] md:mb-[4rem] md:text-[2.2rem] md:leading-[3.3rem] md:tracking-[-0.3px] lg:max-w-[85%]">
            I build fast, accessible websites and web apps using modern frontend
            tools—focused on clean code, responsive design, and a seamless user
            experience.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-[4rem] px-[4rem] md:flex-row">
            <Button asChild>
              <a href="mailto:connectmtb@gmail.com">
                <span>Work with me</span>
                <ArrowRight className="size-[1.6rem] -rotate-45 transition-all duration-200 group-hover:rotate-0" />
              </a>
            </Button>

            <div className="flex items-center gap-[2rem]">
              <ul className="flex items-center">
                {clients.map((item, idx) => (
                  <li
                    key={idx}
                    className="shadow-01 -mx-[.8rem] aspect-square size-[3.5rem] overflow-hidden rounded-[.8rem] grayscale md:size-[4rem]"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="size-full object-cover object-center"
                    />
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-[.5rem]">
                <ul className="flex items-center">
                  {[...Array(5)].map((_, idx) => (
                    <li
                      key={idx}
                      className="relative flex size-[1.4rem] items-center justify-center"
                    >
                      <img src="/images/star.svg" alt="Icon" />
                    </li>
                  ))}
                </ul>

                <h6 className="text-left text-[1.2rem] leading-[1.4rem] font-medium md:text-[1.4rem]">
                  Trusted by 40+ clients
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
