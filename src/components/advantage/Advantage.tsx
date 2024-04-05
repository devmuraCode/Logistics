import cls from "./Advantage.module.scss"
import img5 from "../../assets/img5.svg"
const Advantage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center pt-12 pb-12">НАШИ ПРЕИМУЩЕСТВО </h1>
        <div className="grid grid-cols-2 mb-12  gap-9">
          <div className="flex w-96">
            <img src={img5} alt="" />
            <div>
              <h1 className="font-bold ">Надежность </h1>
              <p className="">Это текст. Нажмите один раз и выберите «Редактировать текст»
                или просто кликните дважды, чтобы добавить свой текст и
                настроить шрифт. </p>
            </div>
          </div>
          <div className="flex w-96">
            <img src={img5} alt="" />
            <div>
              <h1 className="font-bold ">Надежность </h1>
              <p className="">Это текст. Нажмите один раз и выберите «Редактировать текст»
                или просто кликните дважды, чтобы добавить свой текст и
                настроить шрифт. </p>
            </div>
          </div>
          <div className="flex w-96">
            <img src={img5} alt="" />
            <div>
              <h1 className="font-bold ">Надежность </h1>
              <p className="">Это текст. Нажмите один раз и выберите «Редактировать текст»
                или просто кликните дважды, чтобы добавить свой текст и
                настроить шрифт. </p>
            </div>
          </div>
          <div className="flex w-96">
            <img src={img5} alt="" />
            <div>
              <h1 className="font-bold ">Надежность </h1>
              <p className="">Это текст. Нажмите один раз и выберите «Редактировать текст»
                или просто кликните дважды, чтобы добавить свой текст и
                настроить шрифт. </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Advantage