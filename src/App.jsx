import "./App.css";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AboutMe from "./sections/About";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import SkillsList from "./sections/Skills";
import FadeIn from "./components/FadeIn";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Divider /> */}
      <FadeIn>
        <Portfolio />
      </FadeIn>
      <FadeIn>
        <SkillsList />
      </FadeIn>
      <FadeIn>
        <AboutMe />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </>
  );
}

export default App;
