import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar/Navbar";
import LandSection from "./Components/LandSection/LandSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandSection />
    </div>
  );
}

export default App;
