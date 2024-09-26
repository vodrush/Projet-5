import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import E404 from './components/E404.js';
import './styles/App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </Router>
  );
}


export default App