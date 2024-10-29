import Aos from "aos";
import 'aos/dist/aos.css';

import { useEffect } from "react"
import cls from "./Advantage.module.scss"
import img5 from "../../assets/img5.svg";
const Advantage = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);

  return (
    <div>
      
      <div className="max-w-6xl mx-auto px-2 pb-20">
        <h1 data-aos="fade-up" className={cls.title}>
          Наши преимущество{" "}
        </h1>
        <div className="grid lg:grid-cols-2 gap-9">
          <div className="flex">
            <img data-aos="fade-up" src={img5} alt="" />
            <div>
              <h1 data-aos="fade-up" className="font-bold ">Надежность </h1>
              <p data-aos="fade-up" className="">
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт.{" "}
              </p>
            </div>
          </div>
          <div className="flex">
            <img data-aos="fade-up" src={img5} alt="" />
            <div>
              <h1 data-aos="fade-up" className="font-bold ">Надежность </h1>
              <p data-aos="fade-up" className="">
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт.{" "}
              </p>
            </div>
          </div>
          <div className="flex">
            <img data-aos="fade-up" src={img5} alt="" />
            <div>
              <h1 data-aos="fade-up" className="font-bold ">Надежность </h1>
              <p data-aos="fade-up" className="">
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт.{" "}
              </p>
            </div>
          </div>
          <div className="flex ">
            <img data-aos="fade-up" src={img5} alt="" />
            <div>
              <h1 data-aos="fade-up" className="font-bold ">Надежность </h1>
              <p data-aos="fade-up" className="">
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
