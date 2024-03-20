import { FC, useState } from "react";
import Container from "../container/Container";
import cls from "./Navbar.module.scss";
import { ProfileOutlined } from "@ant-design/icons";
interface IProps {
  currentUser?: any;
}

const Navbar: FC<IProps> = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={cls.navbar}>
      <Container>
        <div className="py-4">
          <div className={cls.flex}>
            <img
              className="w-24"
              src="https://i.pinimg.com/736x/d5/f9/fb/d5f9fbe08c848944817834082d04bc49.jpg"
              alt=""
            />
            <div className={cls.wrapper}>
              <ul>
                <li>Главное</li>
                <div className={cls.dropdown}>
                  <li onClick={toggleDropdown}>
                    Услуги
                    {showDropdown && (
                      <ul className={cls.dropdown_content}>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                      </ul>
                    )}
                  </li>
                </div>
                <li>Карго</li>
                <div className={cls.dropdown}>
                  <li onClick={toggleDropdown}>
                    Помощь
                    {showDropdown && (
                      <ul className={cls.dropdown_content}>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                      </ul>
                    )}
                  </li>
                </div>

                <li>О компании</li>
              </ul>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex bg-gray-800 text-3xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <ProfileOutlined />
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      +998 99 0879679
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      muradkusherbaev@gmail.com
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
