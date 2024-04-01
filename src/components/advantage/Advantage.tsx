import cls from "./Advantage.module.scss"
import img5 from "../../assets/img5.svg"
const Advantage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center">НАШИ ПРЕИМУЩЕСТВО </h1>
        <div className=" flex w-1/2 ">
          <img src={img5} alt="" />
          <div>
            <h1 className="text-xl font-bold mb-3">Надежность </h1>
            <p>Это текст. Нажмите один раз и выберите «Редактировать текст»
              или просто кликните дважды, чтобы добавить свой текст и
              настроить шрифт. </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Advantage