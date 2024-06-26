import React from "react";
import cls from "./Examination.module.scss";
const Examination: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-3xl font-bold py-6 text-center">Мы предлагаем такие услуги</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
          <div className="w-full border border-gray p-6">
            <h6 className="text-xl font-bold text-center">
              Удаленная проверка поставщиков в Китае
            </h6>
            <div>
              <p className="py-4">
                Способ оценки качества предполагаемого товара для дальнейшего
                оформления прямых поставок. Специалисты Anno Danini Limited
                изучат регистрационные данные, отзывы о компании, оборот
                денежных средств и другие значимые вопросы, с целью
                предотвращения проведения мошеннических действий со стороны
                фабрики. После полноценной проверки, заключается договор с
                организацией на прямые поставки товаров из Китая.
              </p>
              <p>
                Стоимость удаленной проверки производства составляет 2-3 % от
                общей стоимости груза с включением помощи по переводу денежных
                средств. Вопрос оплаты обсуждается с каждым клиентом в
                индивидуальном порядке.
              </p>
            </div>
          </div>

          <div className="w-full border border-gray p-6">
            <h6 className="text-xl font-bold text-center">
              Удаленная проверка поставщиков в Китае
            </h6>
            <div>
              <p className="py-4">
                Способ оценки качества предполагаемого товара для дальнейшего
                оформления прямых поставок. Специалисты Anno Danini Limited
                изучат регистрационные данные, отзывы о компании, оборот
                денежных средств и другие значимые вопросы, с целью
                предотвращения проведения мошеннических действий со стороны
                фабрики. После полноценной проверки, заключается договор с
                организацией на прямые поставки товаров из Китая.
              </p>
              <p>
                Стоимость удаленной проверки производства составляет 2-3 % от
                общей стоимости груза с включением помощи по переводу денежных
                средств. Вопрос оплаты обсуждается с каждым клиентом в
                индивидуальном порядке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
