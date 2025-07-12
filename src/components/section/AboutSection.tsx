import { Calendar } from "lucide-react";
import { Button } from "../ui/button";

const social = [
  {
    link: "https://www.linkedin.com/in/tahabaigdev",
    icon: "/images/linkedin.svg",
  },
  {
    link: "https://github.com/tahabaigdev",
    icon: "/images/github.svg",
  },
  {
    link: "mailto:connectmtb@gmail.com",
    icon: "/images/mail.svg",
  },
];

const experience = [
  {
    field: "Frontend Engineer",
    company: "RadixTech",
    year: "2024 - Present",
  },
  {
    field: "Frontend Engineer",
    company: "Frototype Agency",
    year: "2024 - 2024",
  },
  {
    field: "Frontend Engineer",
    company: "CreativeCycle",
    year: "2023 - 2024",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-[6rem]">
      <div className="container flex flex-col items-center gap-[4.4rem] md:flex-row">
        <div className="shadow-02 flex w-full flex-col gap-[2.4rem] rounded-[.8rem] bg-white px-[.9rem] pt-[.9rem] pb-[3rem] md:w-auto">
          <div className="flex flex-col items-center gap-[.8rem] text-center">
            <div className="shadow-03 h-[40rem] w-full overflow-hidden rounded-[.8rem] md:h-[28.2rem] md:w-[25.2rem]">
              <img
                src="/images/my-image.avif"
                alt="About Image"
                className="size-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="inline-flex items-center gap-[1rem] px-[1.2rem] py-[.5rem] text-[1.2rem] leading-[2rem] font-medium">
              <span className="relative">
                <span className="absolute top-1/2 left-1/2 inline-flex size-[1.2rem] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#31EE33] opacity-75"></span>
                <span className="relative inline-flex size-[.8rem] rounded-full bg-[#31EE33]"></span>
              </span>
              Available for work
            </div>

            <h3 className="text-[3.6rem] leading-[4.32rem] font-medium">
              Taha Baig
            </h3>

            <p className="max-w-[20rem] text-[1.4rem] leading-[2.24rem]">
              Frontend Engineer Based in Pakistan.
            </p>
          </div>

          <div className="flex flex-col gap-[2.4rem]">
            <div className="flex items-center justify-center gap-[1.6rem]">
              {social.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="relative flex size-[4rem] items-center justify-center rounded-[.8rem] bg-[#efeeea] transition-all duration-200 hover:opacity-80"
                >
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="size-[2.4rem] object-contain object-center"
                  />
                </a>
              ))}
            </div>

            <div className="w-full">
              <Button asChild className="w-full">
                <a href="/resume/my-resume.pdf" target="_blank">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[3.2rem] text-[1.4rem] leading-[2.2rem] lg:text-[1.6rem] lg:leading-[2.4rem]">
          <p>
            Hi there! I'm Taha, a Frontend Engineer with over 2+ years of
            experience in this game. I confidently build fast, responsive web
            interfaces using modern tools and frameworks. I focus on writing
            clean, maintainable code and delivering smooth, user-friendly
            experiences. I'm always eager to take on meaningful projects and
            contribute to high-quality, scalable digital solutions.
          </p>

          <hr className="w-full border-[1px] border-dashed border-[#051A2F] opacity-30" />

          <ul className="flex flex-wrap gap-[1.6rem]">
            {[
              "HTML",
              "CSS",
              "JS",
              "React",
              "Next JS",
              "Tailwind CSS",
              "Bootstrap",
              "SASS/SCSS",
              "Styled Components",
              "Headless UI Libraries",
              "GSAP",
              "Framer Motion",
              "Git/Github",
              "Figma",
              "Adobe Photoshop",
            ].map((item, idx) => (
              <li
                key={idx}
                className="shadow-04 rounded-[.8rem] bg-[#efeeea] px-[1.2rem] py-[.8rem]"
              >
                {item}
              </li>
            ))}
          </ul>

          <hr className="w-full border-[1px] border-dashed border-[#051A2F] opacity-30" />

          <ul className="flex flex-col gap-[2rem]">
            {experience.map((item, idx) => (
              <li
                key={idx}
                className="shadow-04 flex items-center gap-[2rem] rounded-[.8rem] bg-[#efeeea] p-[1.6rem] lg:gap-[4.8rem]"
              >
                <p className="flex flex-1 items-center gap-[1rem] text-left">
                  <Calendar className="size-[2rem] stroke-[1.5px]" />{" "}
                  {item.year}
                </p>

                <p className="flex-1">{item.company}</p>

                <p className="flex-1">{item.field}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
