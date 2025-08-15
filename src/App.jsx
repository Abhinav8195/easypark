import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './index.css';
import Buy from './pages/Buy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/buysticker' element={<Buy/>} />
    </Routes>
  );
}

export default App;
