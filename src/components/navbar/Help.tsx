import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";

const Help = () => {
  return (
    <div className={cls.subNav}>
      <ul className="text-lg cursor-pointer leading-10">
        <li><Link to="/contacts">Контакты</Link></li>
        <li>
          <Link to="/documents"> Документы </Link>
        </li>
        <li><Link to="/news">Новости</Link></li>
      </ul>
    </div>
  );
};

export default Help;
