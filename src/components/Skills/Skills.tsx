import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaReact, FaHtml5, FaCss3, FaCode} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss  } from "react-icons/si";
import { GiDiamonds } from "react-icons/gi";

import * as S from './style'


export const Skills: React.FC = () => {


  return (
    <S.Tech>
      <h3>TECNOLOGIAS QUE USO </h3>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><GiDiamonds /><FaHtml5 />HTML<GiDiamonds /></SwiperSlide>
        <SwiperSlide><GiDiamonds /><FaCss3 />CSS<GiDiamonds /></SwiperSlide>
        <SwiperSlide><GiDiamonds /><SiJavascript />JAVASCRIPT<GiDiamonds /></SwiperSlide>
        <SwiperSlide><GiDiamonds /><SiTypescript />TYPESCRIPT<GiDiamonds /></SwiperSlide>
        <SwiperSlide><GiDiamonds /><FaCode />STYLE-COMPONENTS<GiDiamonds /></SwiperSlide>
        <SwiperSlide><GiDiamonds /><FaReact />REACT.JS<GiDiamonds /></SwiperSlide>
        <SwiperSlide><GiDiamonds /><SiTailwindcss />TAILWIND CSS<GiDiamonds /></SwiperSlide>

      </Swiper>
    </S.Tech>
  );
};
