import React from "react";
import cls from "./Info.module.scss";
const Info: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto px-2">
        <div className={cls.content}>
          <h1 className="text-3xl pb-4 font-semibold text-black">
            Доставка товаров и грузов из Китая
          </h1>
          <div>
            <p>
              Сделать бизнес успешным, способным приносить прибыль, просто -
              достаточно заказать доставку товаров из Китая у проверенной
              товарно-транспортной компании. “Anno Danini”. С нашей стороны
              обеспечивается комплексный подход к любой поставленной задаче,
              независимо от требований клиента и особенностей услуги.
            </p>
            <br />
            <p>
              Международные грузоперевозки из Китая в Россию открывают широкие
              перспективы для бизнеса, удовлетворяя запросы предпринимателей,
              желающих сделать свое дело прибыльным. Доставка товаров из Китая
              от нашей компании станет одним из важных этапов, позволяющих
              занять нишу в продаже, не беспокоясь о конкурентах.
            </p>
            <br />
            <p>
              Логистические решения для поставок из Китая прорабатываются нами с
              детальным рассмотрением каждого фактора, способным повлиять на
              итоговую стоимость услуги. Именно поэтому, наша транспортная
              компания для доставки грузов из Китая уверенно занимает лидирующее
              место на рынке, начиная с 2013 года.
            </p>
          </div>
          <h1 className="text-3xl py-4 font-semibold text-black">
            Почему доверяют “Anno Danini”
          </h1>
          <div>
            <p>
              Этот вопрос интересует всех клиентов, которые хотят впервые
              обратиться в нашу компанию. Сотрудничая с “ADL”, заказчик может
              рассчитывать на следующее:
            </p>
            <br />
            <ul className="list-decimal">
              <li>
                Огромный выбор услуг - доставка и таможенное оформление грузов
                из Китая , производство под собственным брендом, поиск и
                проверка поставщиков в Китае, контейнерные перевозки и многое
                другое.
              </li>
              <li className="py-2">
                Персональный подход к выполнению поставленной задачи. Клиент
                всегда получает желаемый результат, несмотря на особенности и
                сложности услуги.
              </li>
              <li>
                Адекватные ценовые предложения. Мы не гонимся за деньгами и
                лучшее доказательство этому - многотысячная база постоянных
                заказчиков.
              </li>
              <li className="py-2">
                Помощь по любым вопросам. Служба поддержки оперативно
                предоставит интересующую информацию удобным для заказчика
                способом.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
