import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { Loader } from './features/loader/Loader';
import Layout from './layout';
const Home = React.lazy(() => import('./pages/home/home'));
const ErrorNotFound = React.lazy(() => import('./pages/error-404'));
const App: React.FC = () => {
  return (
    <>
      <Router>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route
              element={
                <Layout>
                  <Outlet />
                </Layout>
              }
            >
              <Route path='/' element={<Home />} />
            </Route>

            {/* 404 Page Route */}
            <Route
              element={
                <Layout>
                  <Outlet />
                </Layout>
              }
            >
              <Route path='*' element={<ErrorNotFound />} />
            </Route>
          </Routes>
          {/* <Navbar />
          <Modal />
                <Todos />*/}
        </React.Suspense>
      </Router>
    </>
  );
};

export default App;
