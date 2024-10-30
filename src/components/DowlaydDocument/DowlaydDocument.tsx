import cls from './DowlaydDocuments.module.scss';
import img9 from "../../assets/img9.svg";

const DowlaydDocument = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className={cls.back}>
                <h1 className={cls.title}>СКАЧАТЬ ДОКУМЕНТЫ ДЛЯ СОТРУДНИЧЕСТВО С НАМИ</h1>
                <div className={cls.cards}>
                    <div className={cls.card}>
                        <img src={img9} alt="Документ с изображением" />
                        <div>
                            <h3 className={cls.text}>Договор оферты на доставку из Китая - КАРГО</h3>
                            <a href="/path/to/your/file.pdf" download>
                                <button className={cls.btn}>СКАЧАТЬ ФАЙЛ</button>
                            </a>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={img9} alt="Документ с изображением" />
                        <div>
                            <h3 className={cls.text}>Договор оферты на доставку из Китая - КАРГО</h3>
                            <a href="/path/to/your/file2.pdf" download>
                                <button className={cls.btn}>СКАЧАТЬ ФАЙЛ</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DowlaydDocument;
