
import Basic from '@/components/basic/Basic'
import Delivery from '@/components/delivery/Delivery'
import Header from '@/components/header/Header' 
import Card from '@/components/card/Card'
import React from 'react'
import CarouseHead from '@/components/carousel/CarouselHead'

const MainPage: React.FC = () => {
  return (
    <div>
      <CarouseHead/>
      <Basic title='Основные направления работы компании  '/>
      <Delivery/>
      <Basic title='Виды перевозок '/>
      <Card/>
    </div>
  )
}

export default MainPage