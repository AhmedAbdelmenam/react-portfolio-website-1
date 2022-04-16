import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/testimonials-1.jpg";
import AVTR2 from "../../assets/testimonials-2.jpg";
import AVTR3 from "../../assets/testimonials-3.jpg";
import AVTR4 from "../../assets/testimonials-4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiver",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta providentobcaecati facilis perferendis mollitia sit quis id est recusandae nostrum.Tempore sunt provident a minus reprehenderit qui doloremque cupiditatemolestiae?"
  },
  {
    avatar: AVTR2,
    name: "Beatriz",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta providentobcaecati facilis perferendis mollitia sit quis id est recusandae nostrum.Tempore sunt provident a minus reprehenderit qui doloremque cupiditatemolestiae?"
  },
  {
    avatar: AVTR3,
    name: "Gabriel Charles",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta providentobcaecati facilis perferendis mollitia sit quis id est recusandae nostrum.Tempore sunt provident a minus reprehenderit qui doloremque cupiditatemolestiae?"
  },
  {
    avatar: AVTR4,
    name: "Eric",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta providentobcaecati facilis perferendis mollitia sit quis id est recusandae nostrum.Tempore sunt provident a minus reprehenderit qui doloremque cupiditatemolestiae?"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clints</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container mySwiper"
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{clickable:true}}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clint_avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="clint_name">{name}</h5>
              <small className="clint_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

<article className="testimonial">
  <div className="clint_avatar">
    <img src={AVTR1} alt="Avatar one" />
  </div>{" "}
  <h5 className="clint_name">Ernest Achiver</h5>
  <small className="clint_review">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde labore
    assumenda id. Autem quibusdam eum expedita labore eligendi, esse a eveniet
    perferendis necessitatibus nisi ipsum repudiandae veritatis culpa quas.
  </small>
</article>;

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta provident
  obcaecati facilis perferendis mollitia sit quis id est recusandae nostrum.
  Tempore sunt provident a minus reprehenderit qui doloremque cupiditate
  molestiae?
</p>;
