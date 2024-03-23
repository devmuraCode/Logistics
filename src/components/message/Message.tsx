import Container from "../container/Container";
import cls from "./Message.module.scss";

const Message = () => {
  return (
    <div className={cls.wrapper}>
      <Container>
        <h1 className="text-4xl pb-4 font-semibold text-white">
          СВЯЖИТЕСЬ С НАМИ
        </h1>
        <div className={cls.content}>
            
        </div>
      </Container>
    </div>
  );
};

export default Message;
