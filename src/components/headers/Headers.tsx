import Aos from "aos";
import 'aos/dist/aos.css';

import { useEffect } from "react"

import cls from "./Headers.module.scss"

const Headers = () => {

    useEffect(() => {
        Aos.init({
          duration: 500,
          easing: 'ease-in-out',
        })
      }, []);
    
    return (
        <div className={cls.wrapper}>
            <div className="max-w-6xl mx-auto px-2">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <img data-aos="fade-up" src="https://media.licdn.com/dms/image/D4D12AQGZCNv789WhwA/article-cover_image-shrink_720_1280/0/1698037839644?e=2147483647&v=beta&t=ZfPRQ6mSJ1gSSMi9ZwMTvNg5bMNJloqnKCYqekRxfLk" alt="Командная работа" />
                    </div>
                    <div className={cls.title}>
                        <h1 data-aos="fade-up" className="font-bold text-3xl">
                            Мы находимся в Китае! <br />{" "}
                            <span className="font-normal text-black">Организуем бизнес с Китаем "под ключ"</span>
                        </h1>
                        <p data-aos="fade-up">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе.

                            Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers