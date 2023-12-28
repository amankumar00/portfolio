import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import NavigBar from "./components/NavigBar.jsx";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  return (
    <div>
      <NavigBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
