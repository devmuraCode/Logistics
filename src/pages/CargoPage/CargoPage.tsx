import Card from '@/components/card/Card';
import Basic from '@/components/basic/Basic';
import Headers from '@/components/headers/Headers'
import Lawyers from './../../components/lawyers/Lawyers';

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