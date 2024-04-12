import React from "react";
import { Carousel } from "antd";
import cls from "./CarouselHead.module.scss";

const CarouseHead: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
    <Carousel autoplay speed={500} dots={true} effect="fade">
      <div>
        <div className={cls.wrapper}>
          <div
            data-aos="fade-up"
            className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-20 items-center"
          >
            <div className={cls.title}>
              <h1 className="font-bold text-gray-dark">
                Мы находимся в Китае! <br />{" "}
                <span className="font-normal text-black">
                  Организуем бизнес с Китаем "под ключ"
                </span>
              </h1>
              <p className="font-normal text-gray-dark pb-4">
                Доставим грузы для физических и юридических лиц
              </p>
              <button className="text-black font-bold py-2 px-4">
                Подробнее
              </button>
            </div>
            <div>
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGZCNv789WhwA/article-cover_image-shrink_720_1280/0/1698037839644?e=2147483647&v=beta&t=ZfPRQ6mSJ1gSSMi9ZwMTvNg5bMNJloqnKCYqekRxfLk"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={cls.wrapper}>
          <div
            data-aos="fade-up"
            className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-20 items-center"
          >
            <div className={cls.title}>
              <h1 className="font-bold text-gray-dark">
                Ваш персональный
                <br />{" "}
                <span className="font-normal text-black">
                Представитель в Китае:
                </span>
              </h1>
              <p className="font-normal text-gray-dark pb-4">
              Решаем задачи любой сложности: от поиска нужной модели товара до организации собственного производства в Китае
              </p>
              <button className="text-black font-bold py-2 px-4">
                Подробнее
              </button>
            </div>
            <div>
              <img
                src="https://img.freepik.com/premium-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-421.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default CarouseHead;
