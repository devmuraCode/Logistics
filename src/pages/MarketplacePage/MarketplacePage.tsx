import Advantage from "@/components/advantage/Advantage"
import Headers from "@/components/headers/Headers"
import Info from "@/components/info/Info"
import Message from "@/components/message/Message"
import Container from "@/components/container/Container"
const MarketplacePage = () => {
  return (
    <div>
      <Container>
        <Headers />
        <Advantage />
        <Info />
        <Message />
      </Container>
    </div>
  )
}

export default MarketplacePage