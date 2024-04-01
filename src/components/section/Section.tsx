import cls from "./Section.module.scss"
import img3 from "../../assets/img3.jpeg"
const Section = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-9">КАК ЗАРАБАТЫВАТЬ НА ПАРТНЕРСКОЙ ПРОГРАМЕ </h1>
      <div className={cls.Card}>
        <div className={cls.Cards}>
          <img className="w-14 h-14" src={img3} alt="" />
          <div className="ml-9">
            <h3>Регистрацтя на сайте </h3>
            <p>Регистрируйте в нашей портнерской програме для вебмастеров или активизируйте ее если уже являетесь нашим клиентом </p>
          </div>
        </div>
        <div className={cls.Cards}>
          <img className="w-14 h-14" src={img3} alt="" />
          <div className="ml-9">
            <h3>Регистрацтя на сайте </h3>
            <p>Регистрируйте в нашей портнерской програме для вебмастеров или активизируйте ее если уже являетесь нашим клиентом </p>
          </div>
        </div>
        <div className={cls.Cards}>
          <img className="w-14 h-14" src={img3} alt="" />
          <div className="ml-9">
            <h3>Регистрацтя на сайте </h3>
            <p>Регистрируйте в нашей портнерской програме для вебмастеров или активизируйте ее если уже являетесь нашим клиентом </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section