import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import cls from "./Delivery.module.scss";
import { useChina } from './hook/useDelivery';

const Delivery = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);

  const { data: china } = useChina();
  console.log(china);

  return (
    <div className={cls.wrapper}>
      <h1 data-aos="fade-up" className="font-bold text-3xl text-white text-center">
        Доставка грузов из китая
      </h1>
      <div className="max-w-6xl mx-auto py-10">
        {china?.map((china) => (
            <div data-aos="fade-up" className="bg-inherit p-8 border border-white text-white">
              <div className="">
                <div className="">
                  <img
                    loading="lazy"
                    src={china.img}
                    alt=""
                    className="card-cargo-tracking__icon w-16 h-10"
                  />
                </div>
                <h6 className="mb-0">{china.main_title}</h6>
              </div>
              <div data-aos="fade-up" className="">
                <p>
                  {china.description}
                </p>
              </div>
            </div>
        ))}
      </div>
      </div>
      );
};

export default Delivery;
