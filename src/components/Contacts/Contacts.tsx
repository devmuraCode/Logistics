import React from 'react'
import cls from './Contacts.module.scss'
import Footer from '../footer/Footer'
const Contacts: React.FC = () => {
  return (
    <div className={cls.wrapper}>
        <div className="max-w-6xl mx-auto px-2">
            <h1 className='text-3xl font-bold text-center pb-10'>Наши контакты</h1>
            <div className={cls.content}>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Contacts