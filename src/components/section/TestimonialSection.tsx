import TestimonialSlider from "../ui/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="relative py-[6rem] md:py-[8rem]">
      <div className="noise"></div>
      <div className="relative z-[10] container">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
