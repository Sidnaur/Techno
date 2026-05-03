import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SupportedPlants from './components/SupportedPlants';
import Footer from './components/Footer';
import DetectDisease from './pages/DetectDisease';
import PlantDiseases from './pages/PlantDiseases';
import About from './pages/About';
import Blog from './pages/Blog';
import { LanguageProvider } from './context/LanguageContext';  
import LanguageSelector from './components/LanguageSelector';  

function App() {
  return (
    <LanguageProvider>                                        
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
              <SupportedPlants />
            </>
          } />
          <Route path="/detect" element={<DetectDisease />} />
          <Route path="/diseases" element={<PlantDiseases />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
        <LanguageSelector />                                
      </BrowserRouter>
    </LanguageProvider>                                       
  );
}

export default App;