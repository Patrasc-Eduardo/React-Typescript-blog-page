import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import AboutDetails from './pages/About';
import ContactDetails from './pages/Contact';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';
import TravelDetails from './pages/TravelUpdates';
import Dropdown from './components/Dropdown';
import AddButton from './components/AddButton';
import Article from './components/Article';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  return (
    <body>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutDetails/>}/>
          <Route path="/contact" element={<ContactDetails/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/travel" element={<TravelDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
    <Footer />
    </body>
  );
}

export default App;
