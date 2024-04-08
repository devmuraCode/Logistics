
import Basic from '@/components/basic/Basic'
import Delivery from '@/components/delivery/Delivery'
import Header from '@/components/header/Header' 
import Card from '@/components/card/Card'
import React from 'react'

const MainPage: React.FC = () => {
  return (
    <div>
      <Header title='Мы находимся в Китае!' subTitle='Организуем бизнес с Китаем "под ключ"' img="https://media.licdn.com/dms/image/D4D12AQGZCNv789WhwA/article-cover_image-shrink_720_1280/0/1698037839644?e=2147483647&v=beta&t=ZfPRQ6mSJ1gSSMi9ZwMTvNg5bMNJloqnKCYqekRxfLk"/>
      <Basic title='Основные направления работы компании  '/>
      <Delivery/>
      <Basic title='ВИДЫ ПЕРЕВОЗОК '/>
      <Card/>
    </div>
  )
}

export default MainPage