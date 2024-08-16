import cls from "./Navbar.module.scss";

const TopNavbar = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.Card}>
                <div className="flex justify-around p-3">
                    <h1 className="text-white">Logistics</h1>
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