import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Apropos from './components/Apropos';
import Banner from './components/Banner'
import Footer from './components/Footer';
import E404 from './components/E404';
import LogementDetail from './components/LogementDetail';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Banner /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<E404 />} />
        <Route path="/logement/:id" element={<LogementDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
