import React, { useRef } from "react";
import { Carousel } from "antd";
import cls from "./CarouselHead.module.scss";
import { useBanners } from "./hook/useCarusel";

const CarouseHead: React.FC = () => {
  const { data: banners } = useBanners();
  const carouselRef = useRef<any>(null); // Ссылка на карусель

  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Кнопки переключения слайдов */}
      <button
        className={cls.prevBtn}
        onClick={() => carouselRef.current?.prev()}
      >
        {"<"}
      </button>
      <button
        className={cls.nextBtn}
        onClick={() => carouselRef.current?.next()}
      >
        {">"}
      </button>

      <Carousel
        ref={carouselRef}
        autoplay
        speed={1000}
        dots={true}
        effect="fade"
      >
        {banners?.map((banner, index) => (
          <div key={index} className={cls.wrapper}>
            <div
              data-aos="fade-up"
              className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-20 items-center"
            >
              <div className={cls.title}>
                <h1 className="font-bold text-gray-dark">
                  {banner.main_title} <br />
                  <span className="font-normal text-black">
                    {banner.second_title}
                  </span>
                </h1>
                <p className="font-normal text-base text-gray-dark mt-6 mb-4 pb-4">
                  {banner.description}
                </p>
                <button className="text-black font-bold py-4 px-6">
                  Подробнее
                </button>
              </div>
              <div>
                <img src={banner.img} alt={banner.main_title} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouseHead;























