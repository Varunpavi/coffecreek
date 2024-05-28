import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Button from "../ui/button";

const Carousel = () => {
  const hero = [
    {
      images: "assets/images/img_1.jpeg",
      title: "Enjoy your time in our HomeStay with pleasure.",
      heading: "A New Vision Of Comfort",
    },
    {
      images: "assets/images/img_4.jpeg",
      title: "Enjoy your time in our HomeStay with pleasure.",
      heading: "A New Vision Of Comfort",
    },
    {
      images: "assets/images/img_5.jpeg",
      title: "Enjoy your time in our HomeStay with pleasure.",
      heading: "Explore Premium Panorama Room",
    },
  ];

  return (
    <div className="hero">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
      >
        {hero.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative flex items-center justify-center h-screen cursor-pointer"
          >
            <img
              src={item.images}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-center"
            />
            <div className="absolute inset-0 bg-[#272535] opacity-60"></div>
            <div className="absolute top-1/2  md:top-1/2 md:left-36 lg:left-96 transform -translate-y-1/2 text-center leading-loose">
              <span className="w-10 h-[1px] bg-primary mx-auto block"></span>
              <p className="font-semibold text-primary font-Playfair md:text-2xl my-5 text-center italic">
                {item.title}
              </p>
              <h4 className="text-4xl lg:text-6xl font-Playfair my-5 text-white uppercase leading-normal">
                {item.heading}
              </h4>
              <Button
                variant="outline"
                size="medium"
                label="View Our More"
                className="font-bold"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </div>
        <div className="swiper-button-next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
