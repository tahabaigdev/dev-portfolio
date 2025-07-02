import AvailableBadge from "../ui/AvailableBadge";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white pt-[6rem] pb-[12rem] md:pt-[8rem]"
    >
      <div className="absolute bottom-[-.2rem] left-1/2 -translate-x-1/2">
        <img
          src="/images/shape-icon-02.svg"
          alt="Icon"
          className="object-contain object-center"
        />
      </div>

      <div className="container flex flex-col items-center gap-[3rem] text-center md:gap-[5rem]">
        <h3 className="max-w-[100rem] text-[4rem] leading-[4rem] font-light md:text-[10rem] md:leading-[9.5rem] md:tracking-[0.7px]">
          Let's <strong className="font-medium">build</strong> the next big
          thing <strong className="font-medium">together</strong>
        </h3>

        <p className="max-w-[70rem] text-[1.4rem] tracking-[0.7px] md:text-[2.2rem] md:leading-[3rem]">
          Just email us at{" "}
          <a href="mailto:connectmtb@gmail.com" className="underline">
            connectmtb@gmail.com
          </a>{" "}
          with any inquiries, and we’ll reply within the next business day.
        </p>

        <div>
          <AvailableBadge />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
