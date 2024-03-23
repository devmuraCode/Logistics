
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Spheres from "./components/spheres/Spheres";
import Basic from "./components/basic/Basic";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Basic/>
      <Spheres/>
      <Footer />
    </div>
  );
};

export default App;
