import Aos from "aos";
import 'aos/dist/aos.css';
import cls from "./Card.module.scss";

import { useEffect } from "react";
import { useAdvantages } from "./hook/useCard";
const Card = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);

  const { data: advantage } = useAdvantages();
  console.log(advantage);


  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className={cls.media}>
        <h1 className="text-3xl pb-10 font-semibold text-center">Наши преимущество</h1>
        <h2 className="text-xl pb-10 font-semibold text-center">Мы привержены работе с крупными объёмами - Наша компания предоставляет услуги для юридических лиц с начальным весом груза от 100 кг, что открывает возможности для клиентов с небольшими объёмами на начать деловое сотрудничество с Китаем. Оплата за предоставляемые услуги, оформление необходимых документов, наша надёжность, возможность отслеживать груз, а также персональное сопровождение менеджера - все эти аспекты гарантируют нашим клиентам уверенность и удобство в сотрудничестве.</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          {advantage?.map((advantage) => (
            <div data-aos="fade-up" className={cls.Card}>
              <div className={cls.item}>
                <img src={advantage.img} alt="" />
                <h2>{advantage.second_title}</h2>
                <p>
                {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
