import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import cls from "./Basic.module.scss";
interface BasicProps {
  title: string;
}
const Basic: React.FC<BasicProps> = ({ title }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);
  return (
    <div className={cls.wrapper}>
      <div className="max-w-5xl mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-center pt-12 pb-12">{title}</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-28">
          <div data-aos="fade-up" className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/air-deliv-icon.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Представитель в Китае</h6>
          </div>

          <div data-aos="fade-up" className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/suitcase.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Перевозки для юридических лиц</h6>
          </div>
          <div data-aos="fade-up" className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/box.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Выкуп товаров в Китае</h6>
          </div>
          <div data-aos="fade-up" className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/representative.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Представитель в Китае</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
