import cls from "./Card.module.scss";
import img2 from "../../assets/img2.png";
const Card = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl pb-10 font-semibold text-gray-dark text-center">НАШИ ПРЕИМУЩЕСТВО</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          <div className={cls.Card}>
            <div className={cls.item}>
              <img src={img2} alt="" />
              <h2>Лоялность к обьемам </h2>
              <p>
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт. 
              </p>
            </div>
          </div>
          <div className={cls.Card}>
            <div className={cls.item}>
              <img src={img2} alt="" />
              <h2>Лоялность к обьемам </h2>
              <p>
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт. 
              </p>
            </div>
          </div>
          <div className={cls.Card}>
            <div className={cls.item}>
              <img src={img2} alt="" />
              <h2>Лоялность к обьемам </h2>
              <p>
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт.
              </p>
            </div>
          </div>
          <div className={cls.Card}>
            <div className={cls.item}>
              <img src={img2} alt="" />
              <h2>Лоялность к обьемам </h2>
              <p>
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт. 
              </p>
            </div>
          </div>
          <div className={cls.Card}>
            <div className={cls.item}>
              <img src={img2} alt="" />
              <h2>Лоялность к обьемам </h2>
              <p>
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт. 
              </p>
            </div>
          </div>
          <div className={cls.Card}>
            <div className={cls.item}>
              <img src={img2} alt="" />
              <h2>Лоялность к обьемам </h2>
              <p>
                Это текст. Нажмите один раз и выберите «Редактировать текст» или
                просто кликните дважды, чтобы добавить свой текст и настроить
                шрифт. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
