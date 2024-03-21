import Container from '../container/Container'
import cls from './About.module.scss'
const About = () => {
  return (
    <div className={cls.wrapper}>
        <Container>
            <div className={cls.content}>
                <h1 className='text-4xl pb-4 font-semibold text-black'>КТО МЫ</h1>
                <p className='text-lg text-gray-dark font-light lg:w-144'>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе.</p>
            </div>
        </Container>
    </div>
  )
}

export default About