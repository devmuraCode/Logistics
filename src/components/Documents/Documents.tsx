import React from "react";
import cls from "./Documents.module.scss";
import { Link } from "react-router-dom";
const Documents: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-3xl font-bold uppercase text-center pb-5">
          Документы
        </h1>
        <h6 className="text-xl font-bold pb-2">
          Доставка для физических и юридических лиц
        </h6>
        <div className={cls.content}>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="w-full bg-white py-5 px-10">
              <div className="flex gap-10">
                <img className="w-10" src="https://www.svgrepo.com/show/64173/pdf-file.svg" alt="Загрузить PDF" />
                <div>
                  <p className="text-gray-dark font-bold"><Link to="/">Договор оферты на доставку из Китая - Карго</Link></p>
                  <p className="text-gray text-sm">338,4 kb</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-white py-5 px-10">
              <div className="flex gap-10">
              <img className="w-10" src="https://www.svgrepo.com/show/64173/pdf-file.svg" alt="Загрузить PDF" />
                <div>
                  <p className="text-gray-dark font-bold"><Link to="/">Договор оферты на доставку из Китая - Карго</Link></p>
                  <p className="text-gray text-sm">338,4 kb</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-white py-5 px-10">
              <div className="flex gap-10">
              <img className="w-10" src="https://www.svgrepo.com/show/64173/pdf-file.svg" alt="Загрузить PDF" />
                <div>
                  <p className="text-gray-dark font-bold"><Link to="/">Договор оферты на доставку из Китая - Карго</Link></p>
                  <p className="text-gray text-sm">338,4 kb</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-white py-5 px-10">
              <div className="flex gap-10">
              <img className="w-10" src="https://www.svgrepo.com/show/64173/pdf-file.svg" alt="Загрузить PDF" />
                <div>
                  <p className="text-gray-dark font-bold"><Link to="/">Договор оферты на доставку из Китая - Карго</Link></p>
                  <p className="text-gray text-sm">338,4 kb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
