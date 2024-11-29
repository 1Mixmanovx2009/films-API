import Афиша from '../assets/images/Афиша.svg'
import siteLogo from '../assets/images/siteLogo.svg'
import Билеты from '../assets/images/Билеты.svg'
import Сеансы from '../assets/images/Сеансы.svg'
import Поиск from '../assets/images/Поиск.svg'
import img from '../assets/images/img.png'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
function Home() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <header className="flex justify-between items-center container mx-auto xl opacity-[#00000080] py-[16px]">
        <a href="/">
          <img src={siteLogo} alt="Logo" />
        </a>
        <ul className="flex justify-between items-center gap-7">
          <li>
            <a className="flex flex-col items-center text-[#A1A1A1]" href="#">
              <img src={Афиша} alt="Афиша" />
              Афиша
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center text-[#A1A1A1]" href="#">
              <img src={Сеансы} alt="Сеансы" />
              Сеансы
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center text-[#A1A1A1]" href="#">
              <img src={Билеты} alt="Билеты" />
              Билеты
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center text-[#A1A1A1]" href="#">
              <img src={Поиск} alt="Поиск" />
              Поиск
            </a>
          </li>
        </ul>
        <div className="flex justify-between border-slate items-center gap-[20px]">
          <select className="bg-[#1D1D1D80] text-white py-[10px] px-[8px] rounded-[12px]">
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
          </select>
          <button className="w-[180px] py-[18px] text-[16px] font-[500] text-center text-white border border-[#C61F1F] bg-[#C61F1F] rounded-[12px]">
            Войти
          </button>
        </div>
      </header>
      <main>
      <div className="w-full h-screen bg-black text-white">
      <Swiper
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="h-[500px] w-full"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={img}
              alt="Kung Fu Panda 4"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-4xl font-bold">Kung Fu Panda 4</h2>
              <p className="text-sm mt-2">2024 • Комедия • 1ч 34м • EN • 6+</p>
              <button className="mt-4 py-2 px-4 bg-[#C61F1F] text-white rounded-md">
                Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={img}
              alt="Movie 2"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute flex flex-col justify-center items-center left-0 bottom-10 right-0 top-45 text-white">
              <h2 className="text-4xl font-bold">Another Movie</h2>
              <p className="text-sm mt-2">2023 • Action • 2ч 10м • EN • 13+</p>
              <button className="mt-4 py-2 px-4 bg-[#C61F1F] text-white rounded-md">
                Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="mt-4 h-[100px] w-full"
      >
        <SwiperSlide>
          <img
            src={img}
            alt="Kung Fu Panda 4 Thumbnail"
            className="h-[100px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="Movie 2 Thumbnail"
            className="h-[100px] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>

      </main>
    </div>
  );
}

export default Home;
