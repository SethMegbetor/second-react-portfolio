import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Lorem, ipsum dolor.",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur voluptas nam eaque nulla labore atque minima, consectetur quidem ipsa!",
  },
  {
    avatar: AVTR2,
    name: "Lorem, ipsum dolor.",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur voluptas nam eaque nulla labore atque minima, consectetur quidem ipsa!",
  },
  {
    avatar: AVTR3,
    name: "Lorem, ipsum dolor.",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur voluptas nam eaque nulla labore atque minima, consectetur quidem ipsa!",
  },
  {
    avatar: AVTR4,
    name: "Lorem, ipsum dolor.",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur voluptas nam eaque nulla labore atque minima, consectetur quidem ipsa!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        style={{
          // "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "20px",
        }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
