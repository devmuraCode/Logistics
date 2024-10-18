import Basic from "@/components/basic/Basic"
import Card from "@/components/card/Card"
import DowlaydDocument from "@/components/DowlaydDocument/DowlaydDocument"
import Headers from "@/components/headers/Headers"
import Suppliers from "@/components/suppliers/Suppliers"

const SuppliersPage = () => {
  return (
    <div>
        <Headers/>
        <Basic title=" Кому полезны услуги по поиску поставщиков в китае"/>
        <Suppliers/>
        <DowlaydDocument/>
        <Card/>
    </div>
  )
}

export default SuppliersPage