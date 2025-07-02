import { useLenisScroll } from "@/hooks/useLenis";

const navItems = [
  {
    link: "#work",
    label: "Work",
  },
  {
    link: "#about",
    label: "About",
  },
  {
    link: "#contact",
    label: "Contact",
  },
];

const Navbar = () => {
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
    <nav className="flex justify-end md:justify-center">
      <ul className="flex w-max rounded-[.8rem] bg-(--base-color-01) px-[.5rem] md:px-[1rem]">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              className="flex items-center justify-center rounded-[.8rem] p-[.8rem] text-[1.1rem] leading-[1.7rem] font-normal text-white transition-all duration-200 hover:opacity-80 md:px-[1.4rem] md:py-[1rem] md:text-[1.4rem] md:leading-[2rem]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
