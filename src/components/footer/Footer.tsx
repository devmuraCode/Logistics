import React from "react";
import cls from "./Footer.module.scss";
import { ContactsOutlined,MailOutlined,  WechatOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useContact } from "./hook/useFooter";
import { SlSocialVkontakte } from "react-icons/sl";


const Footer: React.FC = () => {


  const { data: contact } = useContact();
  console.log(contact);


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
            {contact?.map((contact) => (
              <div className="pb-10">
                <h2 className="font-semibold pb-3">
                  <ContactsOutlined /> Контакты
                </h2>
                <ul>
                  <li>
                    {contact.first_contact}
                  </li>
                  <li>
                    {contact.second_contact}
                  </li>
                 
                </ul>
              </div>
            ))}

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
              <FaInstagram style={{ fontSize: "30px" }}  size={30} />
              <a href="https://t.me/Legacyexcom"><FaTelegramPlane style={{ fontSize: "30px" }}  size={30} /></a>
              <WechatOutlined style={{ fontSize: "30px" }} size={30} />
              <WhatsAppOutlined style={{ fontSize: "30px" }} size={30} />
              <SlSocialVkontakte size={30}  />
              <a href="https://youtube.com/@legacyex?si=5PreMDswLEy8EA7w"><FaYoutube style={{ fontSize: "30px" }}  size={30}  /></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
