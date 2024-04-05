import Headers from '@/components/headers/Headers'
import React from 'react'
import Lawyers from './../../components/lawyers/Lawyers';
import Basic from '@/components/basic/Basic';
import Card from '@/components/card/Card';

const CargoPage = () => {
  return (
    <div>
      <Headers />
      <Lawyers/>
      <Basic title='ОСНОВНЫЕ ВИДЫ ДОСТАВКИ '/>
      <Card/> 
    </div>
  )
}

export default CargoPage