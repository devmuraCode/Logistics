import Aos from "aos";
import 'aos/dist/aos.css';
import cls from "./Card.module.scss";
import img2 from "../../assets/img2.png";
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
        <h1 className="text-3xl pb-10 font-semibold text-center">Наши преимущество</h1>
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
