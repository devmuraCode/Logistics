import Aos from "aos";
import cls from "./Header.module.scss";
import React, { useEffect } from "react";
interface HeaderProps {
  title: string;
  subTitle: string;
  img: string;
}
const Header: React.FC<HeaderProps> = ({ title, subTitle, img }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto px-2">
        <div data-aos="fade-up" className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-20 items-center">
          <div className={cls.title}>
            <h1 className="font-bold text-gray-dark">
              {title} <br />{" "}
              <span className="font-normal text-black">{subTitle}</span>
            </h1>
            <p className="font-normal text-gray-dark pb-4">Доставим грузы для физических и юридических лиц</p>
            <button className="text-black font-bold py-2 px-4">
              Подробнее
            </button>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
