import img8 from '../../assets/img8.png'
import cls from './Requests.module.scss'
const Requests = () => {

  return (
    <div className='max-w-6xl mx-auto'>
        <div className={cls.request}>
          <img className={cls.img} src={img8} alt="" />
          <h1  className='text-xl'>Мы готовы ответить на ваши вопросы </h1>
          <button className={cls.btn}>оставить запросы </button>
        </div>
    </div>
  )
}

export default Requests