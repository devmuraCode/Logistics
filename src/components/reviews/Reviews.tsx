import Container from '../container/Container'
import cls from './Reviews.module.scss'
const Reviews = () => {
  return (
    <div className={cls.wrapper}>
        <Container>
            <div className={cls.content}>
                <h1 className="text-5xl pb-4 font-semibold text-white">
                  ОТЗЫВЫ
                </h1>
                <p className="text-lg text-white font-light">
                  Команда, которая помогает сделать вашу жизнь лучшей
                </p>
            </div>
        </Container>
    </div>
  )
}

export default Reviews