import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import cls from "./СontainerDelivry.module.scss";

const СontainerDelivry = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className={cls.wrapper}>
    <div className="max-w-6xl mx-auto px-2">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 lg:gap-20 items-center">
        <div className={cls.title}>
          <h1 data-aos="fade-up" className="font-bold text-gray-dark text-3xl">
          Доставка 40 и 20 футового контейнера из Китая <br />
          </h1>
          <p data-aos="fade-up" className="font-normal text-gray-dark pb-4">Перевозка грузов из Китая контейнерным транспортом пользуется огромной популярностью среди предпринимателей по нескольким причинам:</p>
          <div>
            <ul className="font-normal text-sm leading-7 text-gray-dark pb-4">
                <li data-aos="fade-up">- Экономия на логистике благодаря низким затратам на фрахт и возможности размещения 1 или 2 контейнеров на одной платформе.</li>
                <li data-aos="fade-up">- Сокращение затрат на упаковку, поскольку перегрузка осуществляется более бережно.</li>
                <li data-aos="fade-up">- При доставке из Китая контейнером чаще всего сопровождается пакетом документов на товар.</li>
            </ul>
          </div>
          <button data-aos="fade-up" className="text-black font-bold py-2 px-4">
            Подробнее
          </button>
        </div>
        <div>
          <img data-aos="fade-up" src="https://www.container-xchange.com/wp-content/uploads/2022/10/Realistic-image-of-a-container-being-lifted-from-a-truck-on-delivery-1.png" alt="Контейнерные перевозки по всему миру" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default СontainerDelivry