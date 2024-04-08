import cls from "./СontainerDelivry.module.scss";

const СontainerDelivry = () => {
  return (
    <div className={cls.wrapper}>
    <div className="max-w-6xl mx-auto px-2">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 lg:gap-20 items-center">
        <div className={cls.title}>
          <h1 className="font-bold text-gray-dark text-3xl">
          Доставка 40 и 20 футового контейнера из Китая <br />
          </h1>
          <p className="font-normal text-gray-dark pb-4">Контейнерные перевозки из Китая очень популярная услуга для бизнеса по нескольким причинам:</p>
          <div>
            <ul className="font-normal text-sm leading-7 text-gray-dark pb-4">
                <li>- Дешевле логистика за счет низкой стоимости фрахта и размещения 1 или 2 контейнеров на 1 платформу</li>
                <li>- Меньше расходов на упаковку, так как перегрузы бережней</li>
                <li>- При доставке из Китая контейнером чаще всего груз идет с пакетом документов на товар</li>
            </ul>
          </div>
          <button className="text-black font-bold py-2 px-4">
            Подробнее
          </button>
        </div>
        <div>
          <img src="https://www.container-xchange.com/wp-content/uploads/2022/10/Realistic-image-of-a-container-being-lifted-from-a-truck-on-delivery-1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default СontainerDelivry