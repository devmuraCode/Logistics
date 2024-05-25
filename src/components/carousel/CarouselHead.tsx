import React from "react";
import { Carousel } from "antd";
import cls from "./CarouselHead.module.scss";
import { useBanners } from "./hook/useCarusel";

const CarouseHead: React.FC = () => {

  const { data: banners } = useBanners();
  console.log(banners);


  return (
    <div className="max-w-6xl mx-auto">
      <Carousel autoplay speed={100} dots={true} effect="fade">
        {banners?.map((banner) => (

          <div className={cls.wrapper}>
            <div
              data-aos="fade-up"
              className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-20 items-center"
            >
              <div className={cls.title}>
                <h1 className="font-bold text-gray-dark">
                  {banner.main_title} <br />{" "}
                  <span className="font-normal text-black">
                    {banner.second_title}
                  </span>
                </h1>
                <p className="font-normal text-gray-dark pb-4">
                  {banner.description}
                </p>
                <button className="text-black font-bold py-2 px-4">
                  Подробнее
                </button>
              </div>
              <div>
                <img
                  src={banner.img}
                  alt=""
                />
              </div>
            </div>
          </div>

        ))}
      </Carousel>
    </div>

  );
};

export default CarouseHead;
