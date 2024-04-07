import { BankOutlined, GlobalOutlined, PercentageOutlined, TruckOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const Accompanying: React.FC = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-2">
        <div>
            
          <h2 className="text-3xl font-bold text-center">
            Сопутствующие услуги
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-28">
          <Card style={{ width: 300 }}>
          <GlobalOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">Выкуп с 1688</h2>
            </div>
          </Card>
          <Card style={{ width: 300 }}>
          <PercentageOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">Продажа товаров на маркетплейсах</h2>
            </div>
          </Card>
          <Card style={{ width: 300 }}>
          <TruckOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">Доставка асиков</h2>
            </div>
          </Card>
          <Card style={{ width: 300 }}>
          <BankOutlined />
            <div>
              <h2 className="text-xl font-bold text-center">Перевод денежных средств</h2>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Accompanying;
