import SubNav from "./SubNav";
import { useState } from "react";
import cls from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { DownOutlined } from "@ant-design/icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cls.wrapper}>
      <div className="max-w-6xl mx-auto px-2">
        <div className="py-6">
          <div className="flex items-center justify-between sm:items-stretch">
            <h1>LOGISTICS</h1>
            <div className="sm:hidden">
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
              } sm:flex sm:ml-6`}
            >
              <ul className="flex flex-col items-center sm:flex-row gap-10 ml-7">
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
                  <Dropdown dropdownRender={() => <SubNav />} trigger={["hover"]}>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
