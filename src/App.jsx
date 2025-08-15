import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './index.css';
import Buy from './pages/Buy';
import Create from './pages/Create';
import Scan from './pages/Scan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/buysticker' element={<Buy/>} />
       <Route path='/create' element={<Create/>} />
       <Route path='/Scan' element={<Scan/>} />
    </Routes>
  );
}

export default App;
