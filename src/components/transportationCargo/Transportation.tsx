import React from 'react'
import cls from './Transportation.module.scss'
import { Link } from 'react-router-dom'
const Transportation: React.FC = () => {
  return (
    <div className={cls.wrapper}>
        <div className='max-w-6xl mx-auto px-2'>
            <div>
                <h1 className='text-3xl font-bold text-center pb-10'>Грузоперевозки из Китая</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-2'>
                <Link to='/' className='w-full border border-1 p-10'>
                    <h2 className='text-2xl font-bold'>Карго доставка из Китая</h2>
                </Link>
                <Link to='/' className='w-full border border-1 p-10'>
                    <h2 className='text-2xl font-bold'>Карго доставка из Китая</h2>
                </Link>
                <Link to='/' className='w-full border border-1 p-10'>
                    <h2 className='text-2xl font-bold'>Карго доставка из Китая</h2>
                </Link>
                <Link to='/' className='w-full border border-1 p-10'>
                    <h2 className='text-2xl font-bold'>Карго доставка из Китая</h2>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Transportation