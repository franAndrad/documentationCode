import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Menu';
import Home from './components/views/Home';
import Document from './components/views/Document';

function App() {
  return (
    <div className='text-light background pb-5'>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route extact path="/document" element={<Document />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
