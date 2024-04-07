import cls from "./AboutUs.module.scss"
const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-2">
           <div className={cls.aboutCard}>
           <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 items-center">
                <div className="lg:w-4/5">
                    <h1 className="text-3xl font-bold pb-8">О Компании </h1>
                    <p className="text-lg  font-bold pb-4">Это текст. Нажмите один раз и выберите «Редактировать текст»
                        или просто кликните дважды, чтобы добавить свой текст и
                        настроить шрифт. Вы можете переместить его в любое место
                        на странице. Расскажите посетителям сайта о себе.
                    </p>
                </div>
                    <img className="sm:hidden" src="https://www.active.co.th/img/contract-logistics.png" alt="" />
            </div>
           </div>
        </div>
    )
}

export default AboutUs