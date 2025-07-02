import Navbar from "../ui/Navbar";

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

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full py-[1.6rem]">
      <div className="container grid grid-cols-2 items-center px-[2rem] md:grid-cols-3">
        <div className="inline-flex">
          <a
            href="/"
            className="text-[1.4rem] leading-[1.8rem] font-semibold uppercase md:text-[1.6rem] md:leading-[2rem]"
          >
            Taha Baig&apos;
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
