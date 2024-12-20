import cls from "./Lawyers.module.scss";
import img2 from "../../assets/img2.png";
const Lawyers = () => {
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto px-2">
        <div className={cls.card}>
          <h1 className="font-bold text-3xl mb-7">
            Это отзыв. Кликните здесь, чтобы отредактировать и написать {" "}
          </h1>
          <p className={cls.pTitle}>
            Это текст. Нажмите один раз и выберите «Редактировать текст» или
            просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
            Вы можете переместить его в любое место на странице. Расскажите
            посетителям сайта о себе. Это текст. Нажмите один раз и выберите
            «Редактировать текст» или просто кликните дважды, чтобы добавить
            свой текст и настроить шриф
          </p>
        </div>
        <div className={cls.back}>
          <div className={cls.cards}>
            <img src={img2} alt="До 9 Дней" />
            <div>
              <h4>Срок действия </h4>
              <h3>До 9 Дней </h3>
            </div>
          </div>
          <div className={cls.cards}>
            <img src={img2} alt="До 9 Дней" />
            <div>
              <h4>Срок действия </h4>
              <h3>До 9 Дней </h3>
            </div>
          </div>
          <div className={cls.pText}>
            <p>
              Цена карго грузоперевозки из Китая во многом будет зависеть от
              объемов груза, удаленности конечного объекта и, в следствии,
              выбранного способа доставки.
            </p>
          </div>
        </div>
      </div>
      </div>
      );
};

      export default Lawyers;
