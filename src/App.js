import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar/Navbar";
import LandSection from "./Components/LandSection/LandSection";
import KnowOurClientsSection from "./Components/KnowOurClientsSection/KnowOurClientsSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import BenefitsSection from "./Components/BenefitsSection/BenefitsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandSection />
      <KnowOurClientsSection />
      <ServicesSection />
      <BenefitsSection />
    </div>
  );
}

export default App;
