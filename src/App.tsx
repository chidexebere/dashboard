import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppConfig } from './api/hooks';
import { RootState } from './appState/store';
import ErrorPage from './pages/404';
import Home from './pages/home';
import Loading from './pages/loading';
import Product from './pages/product';

function App() {
  const { ON } = useSelector((state: RootState) => state.app);
  const APP_ID = ON === true ? 1 : 2;

  const { isLoading, isError, data } = useAppConfig(APP_ID);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      {data && (
        <div className="bg-gray-100">
          <Routes>
            <Route path="/" element={<Home configData={data} />} />
            <Route path="product" element={<Product configData={data} />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
