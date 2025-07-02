interface SectionTitleProps {
  label: string;
}

const SectionTitle = ({ label }: SectionTitleProps) => {
  return (
    <h2 className="text-[3rem] leading-[4.2rem] font-light tracking-[-1.6px] md:text-[4rem] md:leading-[5.2rem]">
      {label}
    </h2>
  );
};

export default SectionTitle;
