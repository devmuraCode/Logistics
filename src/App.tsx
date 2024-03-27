
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Headers from "./components/headers/Headers";
import Lawyers from "./components/lawyers/Lawyers";
import Card from "./components/card/Card";

const App = () => {
  return (
    <div>
      <Navbar />
     <Headers/>
     <Lawyers/>
     <Card/>
      <Footer />
    </div>
  );
};

export default App;
