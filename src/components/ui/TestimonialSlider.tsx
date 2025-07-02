import rotatingIcon from "/images/rotating-icon.svg";
import quote from "/images/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionLabel from "./SectionLabel";
import "swiper/swiper-bundle.css"; // or 'swiper/css/bundle' for modular CSS
import { testimonials } from "@/constants";

const TestimonialSlider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-end gap-[4rem] px-[1rem] md:flex-row lg:gap-[8rem]">
            <div className="relative h-[45rem] w-full overflow-hidden rounded-[.8rem] bg-amber-200 md:h-[47.4rem] md:w-[40rem]">
              <img
                src={testimonial.image}
                alt="Testimonial"
                className="size-full object-cover object-center"
              />
            </div>

            <div className="flex w-full flex-col gap-[2.4rem] md:w-[59%]">
              <div className="relative size-[7.2rem]">
                <img
                  src={rotatingIcon}
                  alt="Rotating Icon"
                  className="absolute inset-0 size-full animate-spin [animation-duration:6s]"
                />
                <img
                  src={quote}
                  alt="Quote Icon"
                  className="absolute top-1/2 left-1/2 -translate-1/2"
                />
              </div>

              <SectionLabel label="Testimonials" />

              <p className="text-[3rem] leading-[4rem] tracking-[-1px] lg:text-[4rem] lg:leading-[5rem]">
                {testimonial.text}
              </p>

              <h6 className="text-[1.6rem] leading-[2.5rem] font-medium md:text-[1.8rem] md:leading-[3.06rem]">
                {testimonial.name}, {testimonial.role}
              </h6>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
