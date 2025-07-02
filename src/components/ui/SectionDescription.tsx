interface SectionDescriptionProps {
  desc: string;
}

const SectionDescription = ({ desc }: SectionDescriptionProps) => {
  return (
    <p className="text-[1.4rem] leading-[2.2rem] md:text-[1.6rem] md:leading-[2.4rem]">
      {desc}
    </p>
  );
};

export default SectionDescription;
