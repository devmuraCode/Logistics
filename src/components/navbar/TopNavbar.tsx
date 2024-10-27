import cls from "./Navbar.module.scss";
import logo from "../../assets/logo.jpg"
const TopNavbar = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.Card}>
                <div className="flex justify-around p-3">
                    <img className="w-12 h-12" src={logo} alt="" />
                    <div className="flex gap-12">
                        <div className="flex">
                            <img src="" alt="" />
                            <p className="text-white">+998-99-999-99-99</p>
                        </div>
                        <div className="flex">
                            <img src="" alt="" />
                            <p className="text-white">akadel@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar