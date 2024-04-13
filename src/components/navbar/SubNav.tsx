import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import cls from "./Navbar.module.scss";
import { SwapOutlined } from "@ant-design/icons";

const SubNav = () => {
  const SubPath = () => {
    return (
      <div className={cls.supNav}>
        <ul className="text-lg cursor-pointer leading-10">
          <li><Link to="/transportation">Доставка сборных грузов</Link></li>
          <li><Link to="/container">Контейнерные Перевозки</Link></li>
        </ul>
      </div>
    );
  };
  const SubPathTwo = () => {
    return (
      <div className={cls.supNav}>
        <ul className="text-lg cursor-pointer leading-10">
          <li><Link to="/suppliers">поиск поставщиков в Китае</Link></li>
          <li><Link to="/oem">производство в Китае под своим брендом ОЕМ и ОДМ</Link></li>
          <li><Link to="/examination">проверка поставщиков в Китае </Link> </li>
        </ul>
      </div>
    );
  };

  return (
    <div className={cls.subNav}>
      <ul className="text-lg cursor-pointer leading-10">
        <li>
          <Dropdown
            overlay={ <SubPath/> }
            // @ts-ignore
            placement="right"
            trigger={["click"]}
          >
           <SwapOutlined /> {" "} Перевозка грузов
          </Dropdown>
        </li>
        <li><Link to="/productchina" > Выкуп товаров с китайской сайтов </Link></li>
        <li>
        <Dropdown
            overlay={ <SubPathTwo/> }
            // @ts-ignore
            placement="right"
            trigger={["click"]}
          >
         <SwapOutlined /> {" "} Представитель В Китае
          </Dropdown>
        </li>
        <li>Доставка товаров из Китая для маркетплейсов</li>
      </ul>
    </div>
  );
};

export default SubNav;
