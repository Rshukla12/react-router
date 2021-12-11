import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Routes from "./Routes/Routes";

function App() {
  return <div className="App">
    <Navbar />
    <Banner />
    <Routes />
    <Footer />
  </div>;
}

export default App;
