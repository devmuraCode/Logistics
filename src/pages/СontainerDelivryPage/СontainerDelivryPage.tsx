import DowlaydDocument from "@/components/DowlaydDocument/DowlaydDocument"
import Parametros from "@/components/Parametros/Parametros"
import Card from "@/components/card/Card"
import СontainerDelivry from "@/components/containerDelivry/СontainerDelivry"
import Request from "@/components/Requests/Requests"

const СontainerDelivryPage = () => {
  return (
    <div>
        <СontainerDelivry/>
        <Parametros/>
        <Request/>
        <DowlaydDocument/>
        <Card/>
    </div>
  )
}

export default СontainerDelivryPage