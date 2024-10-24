import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';

function ImgeSwiper() {
  const imges = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
        delay: 4000,
        }}
        loop={true}
    >
      {imges.map((img, index) => (
        <SwiperSlide key={index} className="w-full md:h-[90vh] flex  justify-center items-center">
          <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default ImgeSwiper;
