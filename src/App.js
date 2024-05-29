import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import About from "./components/layout/layout";
import Skill from "./components/layout/skill";
import Carousel from "./components/layout/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Skill />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
