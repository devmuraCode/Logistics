import About from "./components/about/About";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Reviews from "./components/reviews/Reviews";
import Spheres from "./components/spheres/Spheres";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Spheres />
      <Reviews />
    </div>
  );
};

export default App;
