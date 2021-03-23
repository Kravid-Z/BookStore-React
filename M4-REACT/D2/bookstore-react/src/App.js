import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBarB_S from "./Components/NavigationBarB_S";
import HeroSection from "./Components/HeroSection";
import FooterB_S from "./Components/FooterB_S";
import MainsSectionB_S from "./Components/MainsSectionB_S";

function App() {
  return (
    <div>
      <NavigationBarB_S title="React Book Store" />
      <HeroSection
        titleHero="Welcome this amazing React bookstore"
        descriptionHero="Where books are burned, in the end people will be burned."
        autor="Heinrich Heine"
      />
      <MainsSectionB_S />
      <FooterB_S />
    </div>
  );
}

export default App;
