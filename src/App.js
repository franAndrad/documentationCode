import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Menu';
import Home from './components/views/Home';
import Documents from './components/views/Documents';
import Temas from './components/views/Temas';

function App() {
  return (
    <div className='text-light background pb-5'>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/title/:id" element={<Temas />} />
          <Route path="/*" element={<Documents />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
