import Aos from "aos";
import 'aos/dist/aos.css';

import {useEffect} from "react";

import { GoContainer } from "react-icons/go";
import { Card } from "antd";

const Parametros: React.FC = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-2 pt-10">
        <div>
            <h1 data-aos="fade-up" className="text-3xl font-bold text-center py-10">Параметры контейнеров</h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-28">
          <Card data-aos="fade-up" className="w-full">
            <div>
              <div>
                <h6 className="text-xl font-bold">
                  Доставка 20 футового контейнера из Китая
                </h6>
                <GoContainer />
              </div>
              <ul className="py-7">
                <li>- длиной 6 метров</li>
                <li>- шириной 2,4 метра</li>
                <li>- высотой 2,5 метра</li>
              </ul>
            </div>
          </Card>
          <Card data-aos="fade-up" className="w-full">
            <div>
              <h6 className="text-xl font-bold">
                Доставка 40 футового контейнера из Китая
              </h6>
              <ul className="py-7">
                <li>- длиной 12 метров</li>
                <li>- шириной 2,4 метра</li>
                <li>- высотой 2,5 метра</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Parametros;
