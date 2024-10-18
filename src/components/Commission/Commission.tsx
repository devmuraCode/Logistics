import cls from "./Commission.module.scss"
const Commission = () => {
    return (
        <div>
            <div className={cls.Container}>
                <div>
                    <h1>Размер комиссии за предосьавляемые услуги </h1>
                </div>
                <div className={cls.card}>
                    < div>
                        <span className={cls.proc}>2%</span>
                        <p>от 800 до 7000$</p>
                    </div>
                    < div>
                        <span>3%</span>
                        <p>от 800 до 7000$</p>
                    </div>
                    < div>
                        <span>5%</span>
                        <p>от 800 до 7000$</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Commission