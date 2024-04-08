import cls from "./ProductChina.module.scss"
import img6 from "../../assets/img6.svg"
import Card from "@/components/card/Card"
import Headers from "@/components/headers/Headers"
import Message from "@/components/message/Message"
const ProductChina = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Headers/>
                <h1 className="text-3xl font-bold text-center mb-8">ВЫКУП И ДОСТАВКА ТОВАРОВ ИЗ КИТАЯ </h1>
                <div className="flex justify-between">
                    <div className={cls.card}>
                        <div>
                            <img src={img6} alt="" />
                            <h1>Выкуп товаров </h1>
                        </div>
                        <h2>01</h2>
                    </div>
                    
                    <div className={cls.card}>
                        <div>
                            <img src={img6} alt="" />
                            <h1>Выкуп товаров </h1>
                        </div>
                        <h2>02</h2>
                    </div>
                    
                    <div className={cls.card}>
                        <div>
                            <img src={img6} alt="" />
                            <h1>Выкуп товаров </h1>
                        </div>
                        <h2>03</h2>
                    </div>
                    
                    <div className={cls.card}>
                        <div>
                            <img src={img6} alt="" />
                            <h1>Выкуп товаров </h1>
                        </div>
                        <h2>04</h2>
                    </div>
                </div>
                <Card/>
                <Message/>
            </div>
        </div>
    )
}

export default ProductChina