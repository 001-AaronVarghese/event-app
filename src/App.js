import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/FAQPage" element={<FAQPage />} />
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
