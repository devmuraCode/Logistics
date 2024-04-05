import cls from "./AboutUs.module.scss"
import img4 from "../../assets/imh4.png"
const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className={cls.aboutCard}>
                <div className="w-4/5">
                    <h1 className="text-3xl font-bold pb-8 ">О Компании </h1>
                    <p className="text-lg  font-bold pb-4">Это текст. Нажмите один раз и выберите «Редактировать текст»
                        или просто кликните дважды, чтобы добавить свой текст и
                        настроить шрифт. Вы можете переместить его в любое место
                        на странице. Расскажите посетителям сайта о себе.
                    </p>
                </div>
                    <img src={img4} alt="" />
            </div>
        </div>
    )
}

export default AboutUs