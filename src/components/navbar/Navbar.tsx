import SubNav from "./SubNav";
import { useEffect, useState } from "react";
import cls from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { DownOutlined } from "@ant-design/icons";
import Help from "./Help";
import useRegisterModal from "@/containers/modals/hooks/useRegisterModal";
import useLoginModal from "@/containers/modals/hooks/useLoginModal";
import UserModal from "./UserModal";

function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBackgroundColor('linear-gradient(90deg, rgba(246,243,237,1) 0%, rgba(232,231,224,1) 57%, rgba(195,195,192,1) 100%)');
      } else {
        setBackgroundColor('#fff');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cls.wrapper} style={{ background: backgroundColor }}>
      <div className="max-w-6xl mx-auto px-2">
        <div className="py-6">
          <div className="lg:flex items-center justify-between sm:items-stretch">
            <h1>LOGISTICS</h1>
            <div className="sm:hidden absolute top-7 right-3">
              <button
                onClick={toggleMobileMenu}
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } sm:flex`}
            >
              <ul className="flex flex-col items-center sm:flex-row lg:gap-10 gap-5  ml-7">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 bg-blue-500 text-black font-bold cursor-pointer"
                  >
                    Главное
                  </Link>
                </li>
                <li>
                  <Dropdown dropdownRender={() => <SubNav />} trigger={["hover"]}>
                    <p className="text-black">
                      Услуги <DownOutlined />
                    </p>
                  </Dropdown>
                </li>
                <li>
                  <Link
                    to="/cargoPage"
                    className="block px-4 py-2 bg-blue-500 text-black font-bold cursor-pointer"
                  >
                    Карго
                  </Link>
                </li>
                <li>
                  <Dropdown dropdownRender={() => <Help />} trigger={["hover"]}>
                    <p className="text-black">
                      Помощь <DownOutlined />
                    </p>
                  </Dropdown>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="block px-4 py-2 bg-blue-500 text-black font-bold cursor-pointer"
                  >
                    О компании
                  </Link>
                </li>
                <Dropdown dropdownRender={() => <UserModal/>} trigger={["hover"]} >
                <p className="block px-4 py-2 bg-blue-500 text-black font-bold cursor-pointer">
                  Вход/Регистрация <DownOutlined />
                </p>
                </Dropdown>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
