import Aos from "aos";
import 'aos/dist/aos.css';

import { useEffect } from "react"
import img6 from "../../assets/img6.svg"
import cls from "./ProductChina.module.scss"
import Card from "@/components/card/Card"
import Headers from "@/components/headers/Headers"
import Message from "@/components/message/Message"
const ProductChina = () => {

    useEffect(() => {
        Aos.init({
          duration: 500,
          easing: 'ease-in-out',
        })
      }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Headers/>
                <h1 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Выкуп и доставка товаров из китая </h1>
                <div className="flex justify-between">
                    <div data-aos="fade-up" className={cls.card}>
                        <div>
                            <img src={img6} alt="" />
                            <h1>Выкуп товаров </h1>
                        </div>
                        <h2>01</h2>
                    </div>
                    
                    <div data-aos="fade-up" className={cls.card}>
                        <div>
                            <img src={img6} alt="" />
                            <h1>Выкуп товаров </h1>
                        </div>
                        <h2>02</h2>
                    </div>
                    
                    <div data-aos="fade-up" className={cls.card}>
                        <div>
                            <img src={img6} alt="" />
                            <h1>Выкуп товаров </h1>
                        </div>
                        <h2>03</h2>
                    </div>
                    
                    <div data-aos="fade-up" className={cls.card}>
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