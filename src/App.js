import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Home from "./components/Home.jsx";
import NavigBar from "./components/NavigBar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Workex from "./components/Workex.jsx";

function App() {
  return (
    <div>
      <NavigBar />
      <Home />
      <About />
      <Workex />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
