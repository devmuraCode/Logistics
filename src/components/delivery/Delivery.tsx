import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import cls from "./Delivery.module.scss";

const Delivery = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto py-10">
        <h1 data-aos="fade-up" className="font-bold text-3xl text-white text-center">
          Доставка грузов из китая
        </h1>
        <div>
          <p data-aos="fade-up" className="font-normal text-white text-start lg:w-3/4 mx-auto py-8">
            Anno Danini – транспортная компания, с 2013 года осуществляющет
            международную доставку грузов из Китая. Сотрудничая с нашей
            компанией, вы получаете исключительно профессиональный сервис:
            высокое качество, оперативность и самые выгодные цены на перевозку
            из Китая.
          </p>
        </div>

        <div data-aos="fade-up" className={cls.content}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 pt-10">
          <div className="bg-inherit p-8 border border-white text-white">
            <div data-aos="fade-up" className="">
              <div className="">
                <img
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div data-aos="fade-up" className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-inherit p-8 border border-white text-white">
            <div className="">
              <div className="">
                <img
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div data-aos="fade-up" className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>

          <div className="bg-inherit p-8 border border-white text-white">
            <div className="">
              <div className="">
                <img
                data-aos="fade-up"
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 data-aos="fade-up" className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div data-aos="fade-up" className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>

          <div className="bg-inherit p-8 border border-white text-white">
            <div data-aos="fade-up" className="">
              <div className="">
                <img
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div data-aos="fade-up" className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
