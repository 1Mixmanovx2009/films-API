import Афиша from "../assets/images/Афиша.svg";
import siteLogo from "../assets/images/siteLogo.svg";
import Билеты from "../assets/images/Билеты.svg";
import Сеансы from "../assets/images/Сеансы.svg";
import Поиск from "../assets/images/Поиск.svg";
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
      <header className="flex justify-between w-full items-center container mx-auto xl opacity-[#00000080] py-[16px]">
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
        <section className="relative">
          <Swiper
            modules={[Navigation, Thumbs]}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            className="main-slider"
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  className="w-full h-[400px] object-cover"
                  src="https://via.placeholder.com/1200x400"
                  alt="Kung Fu Panda 4"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black via-transparent to-transparent text-center">
                  <h2 className="text-4xl font-bold text-center">Kung Fu Panda 4</h2>
                  
                  <p className="mt-2 text-lg">2024 • Комедия • 1ч 34м • EN • 6+</p>
                  <button className="mt-4 px-6 py-3 bg-[#C61F1F] rounded-[12px] font-medium text-white">
                    Смотреть
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[400px] object-cover"
                src="https://via.placeholder.com/1200x400"
                alt="Other Slide"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={5}
            spaceBetween={10}
            className="thumb-slider mt-4"
          >
            <SwiperSlide>
              <img
                className="w-[100px] h-[60px] object-cover"
                src="https://via.placeholder.com/100x60"
                alt="Thumbnail 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100px] h-[60px] object-cover"
                src="https://via.placeholder.com/100x60"
                alt="Thumbnail 2"
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </main>

    </div>
  );
}

export default Home;
