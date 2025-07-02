interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-[1.5rem] text-[1.4rem] font-medium tracking-[1px] uppercase">
      <span>{label}</span>{" "}
      <div className="h-[1px] w-full bg-[#000000] opacity-15" />
    </div>
  );
};

export default SectionLabel;
