import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import NavigBar from "./components/NavigBar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  return (
    <div>
      <NavigBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
