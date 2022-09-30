// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {
  Girl1,
  Girl2,
  Girl3,
  Girl4,
  Girl5,
  Girl6,
  Girl7,
  Girl8,
} from "../factory/carousel";

export function Carousel() {
  return (
    <Swiper
      id="carousel"
      className="mySwiper"
      slidesPerView={2}
      spaceBetween={30}
      slidesPerGroup={2}
      loop={true}
      navigation={true}
      loopFillGroupWithBlank={true}
      pagination={true}
      modules={[Pagination, Navigation]}
      style={{
        height: "700px",
        marginBottom: "5rem",
      }}
    >
      <SwiperSlide>
        <Image src={Girl1} layout="intrinsic" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Girl2} layout="intrinsic" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Girl3} layout="intrinsic" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Girl4} layout="intrinsic" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Girl5} layout="intrinsic" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Girl6} layout="intrinsic" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Girl7} layout="intrinsic" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Girl8} layout="intrinsic" />
      </SwiperSlide>
    </Swiper>
  );
}
