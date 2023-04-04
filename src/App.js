import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Home from './components/views/Home';
import Document from './components/views/Document';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route extact path="/document" element={<Document />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
