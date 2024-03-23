
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Reviews from "./components/reviews/Reviews";
import Spheres from "./components/spheres/Spheres";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Reviews/>
      <Spheres/>
      <Footer />
    </div>
  );
};

export default App;
