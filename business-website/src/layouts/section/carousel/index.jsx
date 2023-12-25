import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";

const Carousel = () => {
  return (
    <section id="banner">
      <div className="banner">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <p>commited to success</p>
            <h1>WE HELP TO GROW YOUR BUSINESS</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta, eius.
            </span>
            <button>OUR SERVICES</button>
          </SwiperSlide>
          <SwiperSlide>
            <p>commited to success</p>
            <h1>WE HELP TO GROW YOUR BUSINESS</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta, eius.
            </span>
            <button>OUR SERVICES</button>
          </SwiperSlide>
          <SwiperSlide>
            <p>commited to success</p>
            <h1>WE HELP TO GROW YOUR BUSINESS</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta, eius.
            </span>
            <button>OUR SERVICES</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
