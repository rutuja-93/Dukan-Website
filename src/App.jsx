
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero-section/Hero";
import WhyDukaan from "./components/why-dukaan/WhyDukaan";
import Marquee from "./components/marquee/Marquee";
import GrowthCard from "./components/growth-card/GrowthCard";
import Features from "./components/growth-card/Features";
import Themes from "./components/theme/Themes";
import EnhancePlugins from "./components/plugins/EnhancePlugins";
import FinalSection from "./components/FinalSection/FinalSection";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <WhyDukaan />
      <GrowthCard/>
       <Features />
       <Themes />
       <EnhancePlugins />
       <FinalSection />
       <Footer />
    </>
  );
}

export default App;
