import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { Card } from "antd";
import {
  BankOutlined,
  GlobalOutlined,
  PercentageOutlined,
  TruckOutlined,
} from "@ant-design/icons";

const Accompanying: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-2 py-10">
        <div>
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center">
            Сопутствующие услуги
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4 py-5">
          <Card data-aos="fade-up" className="w-full">
            <GlobalOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">Выкуп с 1688</h2>
            </div>
          </Card>
          <Card data-aos="fade-up" className="w-full">
            <PercentageOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">
                Продажа товаров на маркетплейсах
              </h2>
            </div>
          </Card>
          <Card data-aos="fade-up" className="w-full">
            <TruckOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">Доставка асиков</h2>
            </div>
          </Card>
          <Card data-aos="fade-up" className="w-full">
            <BankOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">
                Перевод денежных средств
              </h2>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Accompanying;
