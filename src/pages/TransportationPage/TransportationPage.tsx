import Accompanying from '@/components/Accompanying/Accompanying'
import Basic from '@/components/basic/Basic'
import Transportation from '@/components/transportationCargo/Transportation'


const TransportationPage = () => {
  return (
    <div>
      <Transportation />
      <Basic title='Виды перевозок'/>
      <Accompanying/>
    </div>
  )
}

export default TransportationPage