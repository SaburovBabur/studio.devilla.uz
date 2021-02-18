import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

function SwipeBlock(props) {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 1500 }}
      style={{ padding: "1.5rem" }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        375: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 6.2,
          spaceBetween: 30,
        },
      }}
    >
      {props.children.map((tech) => {
        return (
          <SwiperSlide>
            <div className="technology py-2 md:py-5 px-3 md:px-6 rounded-lg | flex items-center justify-evenly shadow-cover bg-white">
              <div className="img w-8 md:h-10">
                <img
                  src={tech.logo}
                  alt="technology"
                  className="technology__logo h-10 "
                />
              </div>
              <p className="pl-2 text-sm   md:font-medium">{tech.name}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwipeBlock;
