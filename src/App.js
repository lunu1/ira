import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import CarList from './pages/CarList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroIntro from './components/HeroIntro';
import CarListTwo from './pages/CarListTwo';
import DocumentsSection from './components/DocumentsSection';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import IRASpiceLanding from './pages/Home';


function App() {
  return (
 <>
 <BrowserRouter>
<Navbar/>

{/* <HeroSection/> */}

<Routes>
  <Route path="/" element={<IRASpiceLanding/>}/>

{/* <Route path="/cars" element={<CarList/>}/>
<Route path="/about" element={<AboutUs/>}/> */}

</Routes>
{/* <CarList/> */}
{/* <HeroIntro/> */}
{/* <CarListTwo/>
<DocumentsSection/> */}
 </BrowserRouter>
 {/* <Footer/> */}

 </>
 
  );
}

export default App;
