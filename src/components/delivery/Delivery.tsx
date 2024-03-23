import cls from "./Delivery.module.scss";

const Delivery = () => {
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="font-bold text-gray-dark text-3xl text-center">
          доставка грузов из китая
        </h1>
        <div>
          <p className="font-normal text-gray-dark text-start lg:w-3/4 mx-auto py-8">
            Anno Danini – транспортная компания, с 2013 года осуществляющет
            международную доставку грузов из Китая. Сотрудничая с нашей
            компанией, вы получаете исключительно профессиональный сервис:
            высокое качество, оперативность и самые выгодные цены на перевозку
            из Китая.
          </p>
        </div>

        <div className={cls.content}></div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 pt-10">
          <div className="bg-white p-8 border border-black">
            <div className="">
              <div className="">
                <img
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>

          <div className="bg-white p-8 border border-black">
            <div className="">
              <div className="">
                <img
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>

          <div className="bg-white p-8 border border-black">
            <div className="">
              <div className="">
                <img
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>

          <div className="bg-white p-8 border border-black">
            <div className="">
              <div className="">
                <img
                  loading="lazy"
                  src="new-page/build/assets/img/card-cargo-tracking/2.svg"
                  alt="Icon"
                  className="card-cargo-tracking__icon"
                />
              </div>
              <h6 className="mb-0">Ведение переговоров с поставщиком</h6>
            </div>
            <div className="">
              <p>
                Обсуждение деталей сделки, проверка наличия нужного товара,
                помощь в получении оптовой скидки
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
