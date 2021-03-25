import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBarB_S from "./Components/NavigationBarB_S";
import HeroSection from "./Components/HeroSection";
import FooterB_S from "./Components/FooterB_S";
import MainsSectionB_S from "./Components/MainSectionB_S";
import React from "react";

class App extends React.Component {
  state = {
    searchInput: "",
  };
  onQueryChange = (e) => {
    this.setState({ searchInput: e.currentTarget.value });
  };
  render() {
    console.log(this.state.searchInput);
    return (
      <div>
        <NavigationBarB_S
          title="React Book Store"
          search={this.state.searchInput}
          setState={this.onQueryChange}
        />
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
}

export default App;
