
import Basic from '@/components/basic/Basic'
import Delivery from '@/components/delivery/Delivery'
import Header from '@/components/header/Header' 
import Card from '@/components/card/Card'
import React from 'react'

const MainPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <Basic title='Основные направления работы компании  '/>
      <Delivery/>
      <Basic title='ВИДЫ ПЕРЕВОЗОК '/>
      <Card/>
    </div>
  )
}

export default MainPage