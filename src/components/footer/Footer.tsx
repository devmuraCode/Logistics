import cls from './Footer.module.scss'
import { ArrowUpOutlined } from '@ant-design/icons'
const Footer = () => {
  return (
    <div className={cls.wrapper}>
      <ArrowUpOutlined style={{ color: 'white', fontSize: '50px' }} />
      <a href='#' className=' text-lg text-white'>Наверх</a>
      <p >©2035 Володин и Морозова. Сайт создан на Wix.com</p>
    </div>
  )
}

export default Footer