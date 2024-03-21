import About from "./components/about/About";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Reviews from "./components/reviews/Reviews";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Reviews/>
      <About/>
      
    </div>
  );
};

export default App;
