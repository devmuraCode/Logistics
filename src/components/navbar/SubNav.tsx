import { Link } from "react-router-dom";

import cls from "./Navbar.module.scss";


const SubNav = () => {

  return (
    <div>
      <div className={cls.subNav}>
        <div className="">
          <ul className="text-xxl text-white cursor-pointer leading-10">
            <li className="text-lg text-white">Перевозка грузов </li>
            <li><Link to="/transportation">Доставка сборных грузов</Link></li>
            <li><Link to="/container">Контейнерные Перевозки</Link></li>
            <li className="text-lg"><Link to="/productchina"> Выкуп товаров с китайской сайтов </Link></li>
          </ul>
        </div>
        <div className={cls.SupNav}>
          <ul className="text-xxl text-white cursor-pointer leading-10">
            <li className="text-lg text-white">Представитель В Китае</li>
            <li><Link to="/suppliers">Поиск поставщиков в Китае</Link></li>
            <li><Link to="/oem">Производство в Китае под своим брендом ОЕМ и ОДМ</Link></li>
            <li><Link to="/examination">Проверка поставщиков в Китае </Link> </li>
            <li className="text-lg"><Link to="/marketplace">Доставка товаров из Китая для маркетплейсов</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
