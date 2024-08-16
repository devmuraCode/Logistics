
import Basic from '@/components/basic/Basic'
import Delivery from '@/components/delivery/Delivery'
import Card from '@/components/card/Card'
import React from 'react'
import CarouseHead from '@/components/carousel/CarouselHead'
import Requests from '@/components/Requests/Requests'
import DowlaydDocument from '@/components/DowlaydDocument/DowlaydDocument'

const MainPage: React.FC = () => {
  return (
    <div>
      <CarouseHead/>
      <Basic title='Основные направления работы компании  '/>
      <Requests/>
      <Delivery/>
      <DowlaydDocument/>
      <Basic title='Виды перевозок '/>
      <Card/>
    </div>
  )
}

export default MainPage