import { useLenisScroll } from "@/hooks/useLenis";

const Footer = () => {
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
    <footer className="relative border-t-[1px] border-dashed border-[#051a2f67]">
      <div className="noise"></div>
      <div className="relative z-[10] container grid grid-cols-1 gap-[1rem] p-[2rem] md:grid-cols-2">
        <p className="text-center text-[1.2rem] leading-[2rem] tracking-[0.7px] md:text-left md:text-[1.4rem] md:leading-[2.4rem]">
          © 2024, DESIGNED AND DEVELOPED BY TAHABAIG
        </p>

        <div className="flex items-center justify-center md:justify-end">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="cursor-pointer text-[1.2rem] tracking-[0.7px] uppercase md:text-[1.4rem]"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
