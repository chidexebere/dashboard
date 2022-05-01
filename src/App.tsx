import { useQuery } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAppConfig } from './api';
import ErrorPage from './pages/404';
import Home from './pages/home';
import Loading from './pages/loading';
import Product from './pages/product';
import { configObject } from './utils/types';

function App() {
  const { isLoading, isError, data } = useQuery<configObject>(
    'appConfig',
    getAppConfig,
  );

  // console.log(error);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      {data && (
        <div className="App">
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
