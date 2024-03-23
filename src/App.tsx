
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Basic from "./components/basic/Basic";
import Delivery from "./components/delivery/Delivery";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Basic/>
      <Delivery/>
      <Footer />
    </div>
  );
};

export default App;
