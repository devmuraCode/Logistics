import Container from "../container/Container";
import cls from "./Header.module.scss";
const Header = () => {
  return (
    <div className={cls.wrapper}>
      <Container>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-20 items-center">
          <div className={cls.title}>
            <h1 className="font-bold text-gray-dark text-3xl">
              Мы находимся в Китае! <br />{" "}
              <span className="font-normal text-black">Организуем бизнес с Китаем "под ключ"</span>
            </h1>
            <p className="font-normal text-gray-dark pb-4">Доставим грузы для физических и юридических лиц</p>
            <button className="bg-amber-500 text-black font-bold py-2 px-4">
              Подробнее
            </button>
          </div>
          <div>
            <img src="https://media.licdn.com/dms/image/D4D12AQGZCNv789WhwA/article-cover_image-shrink_720_1280/0/1698037839644?e=2147483647&v=beta&t=ZfPRQ6mSJ1gSSMi9ZwMTvNg5bMNJloqnKCYqekRxfLk" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
