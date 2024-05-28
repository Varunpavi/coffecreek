import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
export default function Rooms() {
  const rooms = [
    {
      background: "/assets/images/img_2.jpeg",
      title: "Presidential Suite",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor.",
    },
    {
      background: "/assets/images/img_3.jpeg",
      title: "Presidential Suite",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor.",
    },
    {
      background: "/assets/images/img_7.jpeg",
      title: "Presidential Suite",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor.",
    },
    {
      background: "/assets/images/img_10.jpeg",
      title: "Presidential Suite",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor.",
    },
  ];
  return (
    <div className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-1 md:mx-5 lg:mx-10 p-5 items-center">
        <div className="text-center ">
          <span className="border-t-2 border-primary h-1 w-12 block my-5 mx-auto"></span>
          <h5 className="text-primary text-xl">Special selection</h5>
          <h2 className="text-white text-3xl md:text-4xl my-5">Popular Rooms And Suites</h2>
        </div>
        <div className="col-span-1 md:col-span-3">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
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
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
          >
            {rooms.map((room, index) => (
              <SwiperSlide key={index}>
                <span className="absolute inset-0 bg-black/15 z-10"></span>
                <div
                  className="w-full h-96 bg-cover bg-center flex md:items-end p-4 rounded-lg relative"
                  style={{ backgroundImage: `url(${room.background})` }}
                >
                  <div className="absolute inset-0 bg-[#272535] opacity-10"></div>
                  <div className="text-white p-4 relative">
                    <h3 className="text-xl my-3">{room.title}</h3>
                    <p className="text-white">{room.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>
            <div className="swiper-button-next">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
