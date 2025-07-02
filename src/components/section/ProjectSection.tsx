import { projectsData } from "@/constants";
import SectionDescription from "../ui/SectionDescription";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="work" className="relative overflow-hidden bg-white py-[10rem]">
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

      <div className="container flex flex-col gap-[10rem]">
        <div className="flex flex-col gap-[.8rem]">
          <div>
            <SectionLabel label="Projects" />
          </div>

          <div className="flex flex-col items-start justify-between gap-[1rem] lg:flex-row lg:gap-[0rem]">
            <SectionTitle label="Selected Projects" />

            <div className="md:max-w-[60rem] lg:max-w-[45rem]">
              <SectionDescription desc="A selection of projects showcasing my approach to building reliable, responsive web experiences" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10rem] lg:gap-[20rem]">
          {projectsData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col-reverse justify-between gap-[4.5rem] lg:flex-row lg:items-center lg:gap-[0rem]"
            >
              <div className="flex flex-1 flex-col md:pr-[5rem]">
                <h3 className="text-[2.8rem] leading-[3rem] font-light tracking-[-1px] md:text-[3.5rem] md:leading-[3.85rem]">
                  {item.name}
                </h3>

                <p className="my-[2rem] text-[1.6rem] font-light md:text-[1.8rem] md:leading-[2.8rem]">
                  {item.description}
                </p>

                <ul className="mb-[2rem] list-inside list-disc">
                  {item.tech.map((tech, idx) => (
                    <li
                      key={idx}
                      className="text-[1.6rem] leading-[2.8rem] font-light md:text-[1.8rem] md:leading-[3rem]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-[2rem]">
                  <Button asChild className="hover:opacity-90">
                    <a href={item.siteUrl}>
                      <span>Visit Site</span>

                      <ArrowRight className="size-[1.4rem]" />
                    </a>
                  </Button>

                  {/* <a
                    title={`${item.name} GitHub Repo.`}
                    href={item.githubUrl}
                    target="_blank"
                    className="relative flex items-center justify-center transition-all duration-[0.3s] hover:scale-[1.1]"
                  >
                    <img
                      src="/images/github-md.svg"
                      alt="GitHub Icon"
                      className="h-[2.6rem] object-contain"
                    />
                  </a> */}
                </div>
              </div>

              <a
                href={item.siteUrl}
                className="shadow-05 scale3d-hover basis-[100%] overflow-hidden rounded-[.8rem] border border-[#E6E4DF] lg:basis-[65%]"
                target="_blank"
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="size-full object-contain object-center"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
