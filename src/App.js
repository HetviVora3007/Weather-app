import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
