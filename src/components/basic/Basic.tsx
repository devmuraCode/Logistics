import cls from "./Basic.module.scss";

const Basic = () => {
  return (
    <div className={cls.wrapper}>
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-28">
          <div className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/air-deliv-icon.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Представитель в Китае</h6>
          </div>

          <div className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/suitcase.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Перевозки для юридических лиц</h6>
          </div>
          <div className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/box.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Выкуп товаров в Китае</h6>
          </div>
          <div className={cls.item}>
            <div className={cls.img}>
              <img
                className=""
                src="https://anno-danini.com/new-page/build/assets/img/icons/representative.svg"
                alt="Представитель в Китае"
              />
            </div>
            <h6 className="">Представитель в Китае</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
