import React from "react";
import cls from "./Footer.module.scss";
import { ContactsOutlined, FacebookOutlined, InstagramOutlined, MailOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto px-2">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:mx-auto gap-14">
          <div>
            <div className="leading-7 pb-5">
              <h2 className="font-semibold pb-3">Адрес</h2>
              <p>Anna Danina Limited</p>
              <p>
                China <br />
                <span>
                  C101, Xiyu International Plaza, No. 603 Xicha Road, Baiyun
                  District, Guangzhou
                </span>
                <br />
                Пн-Пт 12:00 - 21:00 (GMT+8)
                <br />
                Сб 12:00 - 17:00 (GMT+8)
              </p>
            </div>
            <div className=" leading-7">
              <h2 className="font-semibold pb-3">Наш генеральный партнер</h2>
              <p>Россия</p>
              <p>
                г. Москва, ул. Петровка 23/10 стр. 5, офис 9
                <br />
                <span>Пн-Пт 12:00 - 21:00 (GMT+8)</span>
                <br />
                <span>Сб 12:00 - 17:00 (GMT+8)</span>
              </p>
            </div>
          </div>

          <div className="leading-8 cursor-pointer">
            <div className="pb-10">
              <h2 className="font-semibold pb-3">
                <ContactsOutlined /> Контакты
              </h2>
              <ul>
                <li>
                  Россия: <span>+7 (999) 999-99-99</span>
                </li>
                <li>
                  Китай: <span>+7 (999) 999-99-99</span>
                </li>
                <li>
                  Казахстан: <span>+7 (999) 999-99-99</span>
                </li>
              </ul>
            </div>
            <h2>
              <MailOutlined /> murad@gmail.com
            </h2>
            <h2><WhatsAppOutlined /> {""} Техподдержка

              <br />
              <br />
              <span>WhatsApp/WeChat/Telegram <br />+86 138 2213 2126 </span>
            </h2>
          </div>

          <div>
            <h2 className="font-semibold pb-3 ">Навигация</h2>
            <ul className=" leading-8">
              <li>Главная</li>
              <li>Услуги</li>
              <li>Статьи</li>
              <li>Каталог</li>
              <li>О Нас</li>
              <li>Документы</li>
              <li>Контакты</li>
              <li>Партнерам</li>
              <li>Новасти</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold pb-3 ">Мы в соц сетях  </h2>
            <div className="flex gap-5">
              <FaInstagram size={30} />
              <FaTelegramPlane size={30} />
              <FaFacebook size={30} />
              <FaSquareTwitter size={30}  />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
