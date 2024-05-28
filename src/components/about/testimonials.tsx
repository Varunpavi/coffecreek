import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
// import 'swiper/swiper-bundle.css';
export default function Testimonials() {
  const testimonials = [
    {
      author: "Nicolo Svensky",
      image: "",
      des: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta.",
    },
    {
      author: "Nicolo Svensky",
      image: "",
      des: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta.",
    },
    {
      author: "Nicolo Svensky",
      image: "",
      des: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta.",
    },
    {
      author: "Nicolo Svensky",
      image: "",
      des: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta.",
    },
    {
      author: "Nicolo Svensky",
      image: "",
      des: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta.",
    },
    {
      author: "Nicolo Svensky",
      image: "",
      des: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta.",
    },
  ];
  return (
    <div className="relative m-5 md:m-10">
      <div className="text-center">
        <span className="border-t-[1px] border-primary block h-1 w-10 my-5 mx-auto"></span>
        <h6 className="text-primary italic">What said about us</h6>
        <h2 className="text-3xl my-5">Testimonials and Clients</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop
        pagination={{ clickable: true }}
        className="cursor-pointer"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-lg p-3 border-[1px] border-[#eee] rounded-lg before:contents-[\f10e] before:absolute before:top-10 before:left-10 ">
              <div className="border-[1px] border-[#eee] p-10 rounded-md leading-loose text-center bg-[#f9f9f9]">
                <h1>{item.author}</h1>
                <p className="text-sm my-5">{item.des}</p>
              </div>
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
}
