import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("./public/testimonialsJson.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide
            className="text-center my-10 mx-2 p-5 font-plus_Jakarta_Sans"
            key={testimonial.id}
          >
            <div
              className="title font-extrabold text-xl"
              data-swiper-parallax="-300"
            >
              {testimonial.campName}
            </div>

            <div className="text font-medium" data-swiper-parallax="-100">
              <p>{testimonial.feedback}</p>
              <div className="subtitle" data-swiper-parallax="-200">
                {testimonial.date}
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                {testimonial.rating}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
