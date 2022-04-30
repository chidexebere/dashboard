import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
