import Container from "../container/Container";
import cls from "./Header.module.scss";
const Header = () => {
  return (
    <div className={cls.wrapper}>
      <Container>
        <div className={cls.content}>
        <h1 className="text-5xl pb-4 font-semibold text-white">
          BОЛОДИН И MОРОЗОВА
        </h1>
        <div>
          <p className="text-lg text-white font-light">ЮРИДИЧЕСКАЯ ФИРМА</p>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
