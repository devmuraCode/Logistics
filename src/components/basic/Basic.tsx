import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import cls from "./Basic.module.scss";
import { useDirection } from "./hook/useBasic";
interface BasicProps {
  title: string;
}
const Basic: React.FC<BasicProps> = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);

  const { data: directions } = useDirection();
  console.log(directions);


  return (
    <div className={cls.wrapper}>
      <div className="max-w-5xl mx-auto">

        <div className="grid sm:grid sm:grid-cols-1 grid-cols-4 grid-rows-1 gap-8 md:grid-cols-4 gap-28">

          {directions?.map((direction) => (
            <div data-aos="fade-up" className={cls.item}>
              <div className={cls.img}>
                <img
                  className=""
                  src={direction.img}
                  alt="" 
                  />
              </div>
              <h6 className="">{direction.description}</h6>
            </div>
          ))}
        </div>
      </div >
    </div>
      );
};

      export default Basic;