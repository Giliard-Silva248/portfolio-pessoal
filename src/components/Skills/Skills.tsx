import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaReact, FaHtml5, FaCss3, FaCode} from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";

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
        <SwiperSlide><FaHtml5 />HTML</SwiperSlide>
        <SwiperSlide><FaCss3 />CSS</SwiperSlide>
        <SwiperSlide><SiJavascript />JAVASCRIPT</SwiperSlide>
        <SwiperSlide><SiTypescript />TYPESCRIPT</SwiperSlide>
        <SwiperSlide><FaReact />REACT.JS</SwiperSlide>
        <SwiperSlide><FaCode />STYLE-COMPONENTS</SwiperSlide>
      </Swiper>
    </S.Tech>
  );
};
