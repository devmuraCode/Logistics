import Section from "./components/section/Section";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import AboutUs from "./components/aboutUs/AboutUs";
import Advantage from "./components/advantage/Advantage";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutUs/>
      <Advantage/>
      <Footer />
    </div>
  );
};

export default App;
