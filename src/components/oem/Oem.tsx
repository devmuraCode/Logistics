import React from 'react'
import cls from './Oem.module.scss'
const Oem: React.FC = () => {
  return (
    <div className={cls.wrapper}>
        <div className='max-w-6xl mx-auto'>
            <div className={cls.content}>
                <p className=''>
                ОDM (Original Design Manufacturer) - контрактное производство продукции с уникальным дизайном либо специальными характеристиками. То есть, разработка эскизов моделей производится Вами, а всю необходимую подготовку для запуска
                 производство и непосредственно сам процесс пошива выполняет китайский подрядчик.
                </p>
                <br />
                <p className=''>OEM (Original Equipment Manufacture) - контрактное производство продукции, которая уже существует, под 
                    Вашей торговой маркой. Фактически, копирование уже существующих товаров в Китае.</p>
            </div>
        </div>
    </div>
  )
}

export default Oem