import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Apropos from './components/Apropos';
import Banner from './components/Banner'
import Footer from './components/Footer';
import E404 from './components/E404';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Banner /> 
      <Routes>
        {/* Rediriger "/" vers "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<E404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
