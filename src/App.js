import './App.css';
import NavBar from './components/Nav/TopBar';
import Title from './components/Title/Title';
import HeroSection from './components/HeroSection/HeroSection';
import Power from './components/Power/Power';
import Weapons from './components/Weapons/Weapons';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Title />
      <HeroSection />
      <Power />
      <hr />
      <Weapons />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
