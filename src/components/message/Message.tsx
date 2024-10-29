import Container from "../container/Container";
import cls from "./Message.module.scss";
import { Input } from 'antd';
const Message = () => {

  const { TextArea } = Input;
  return (
    <div className={cls.wrapper}>
      <Container>
        <h1 className="text-4xl pb-4 font-semibold text-white">
          СВЯЖИТЕСЬ С НАМИ
        </h1>
        <div className={cls.content}>
          <div>
            <div className={cls.inputCard}>
              <div>
                <div>
                  <p>Ваше Имя </p>
                  <input className={cls.input} type="text" placeholder="Ваше Имя " id="" />
                </div>
                <br />
                <br />

                <div>
                  <p>E-Mail </p>
                  <input className={cls.input} type="text" placeholder="E-Mail " id="" />
                </div>
              </div>
              <div>
                <div>
                  <p>Телефон </p>
                  <input className={cls.input} type="tel" placeholder="Телефон" id="" />
                </div>
                <br />
                <br />
                <div>
                  <p>Выберите услугу</p>
                  <input className={cls.input} type="text"  placeholder="Выберите услугу" id="" />
                </div>
              </div>
            </div>
            <div className="p-10">
              <br />
              <TextArea className={cls.inputs} rows={4} placeholder="Опишите подробней интересующий вопрос" maxLength={6} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Message;
