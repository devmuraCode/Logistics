import Basic from "@/components/basic/Basic"
import Card from "@/components/card/Card"
import Headers from "@/components/headers/Headers"
import Suppliers from "@/components/suppliers/Suppliers"

const SuppliersPage = () => {
  return (
    <div>
        <Headers/>
        <Basic title=" Кому полезны услуги по поиску поставщиков в китае"/>
        <Suppliers/>
        <Card/>
    </div>
  )
}

export default SuppliersPage