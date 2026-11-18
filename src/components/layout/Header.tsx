import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "../ui/Navbar";

const social = [
  {
    link: "https://www.linkedin.com/in/tahabaigdev",
    icon: "/images/linkedin.svg",
  },
  // {
  //   link: "https://github.com/tahabaigdev",
  //   icon: "/images/github.svg",
  // },
  {
    link: "mailto:connectmtb@gmail.com",
    icon: "/images/mail.svg",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      // Hide on scroll down, show on scroll up (ignore tiny jitters, stay visible near top)
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
        lastScrollY.current = currentScrollY;
      }
    };

    lastScrollY.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[100] w-full px-[2rem] py-[1.6rem] transition-transform duration-300 md:px-0",
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div
        className={cn(
          "container grid grid-cols-2 items-center px-[1rem]! py-[.8rem] transition-all duration-300 md:grid-cols-3 md:px-[2rem]!",
          isScrolled &&
            "shadow-03 rounded-[.8rem] bg-[#efeeea]/70 backdrop-blur-md",
        )}
      >
        <div className="inline-flex">
          <a href="/">
            <img
              src="/images/tb-logo.png"
              alt="Logo"
              className="w-[10rem] md:w-[13rem]"
            />
          </a>
        </div>

        <div>
          <Navbar />
        </div>

        <div className="hidden items-center justify-end gap-[.8rem] md:flex">
          {social.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="relative flex size-[2.2rem] items-center justify-center transition-all duration-200 hover:opacity-80"
            >
              <img src={item.icon} alt="Icon" className="object-contain" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
