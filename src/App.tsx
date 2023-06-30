import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Loader } from './features/loader/Loader';
import Layout from "./layout";
const Modal = React.lazy(() => import('./features/modal/Modal'));
const Todos = React.lazy(() => import('./features/todos/Todos'));
const Home = React.lazy(()=>import('./pages/home/home'))
const Navbar = React.lazy(() => import('./features/navbar/Navbar'));
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
                  <Route path="/" element={<Home />} />
                  <Route
                      path="/todos"
                      element={<Todos />}
                  />
                </Route>
                
                {/* 404 Page Route */}
                <Route
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }
                >
                  <Route path="*" element={<ErrorNotFound />} />
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
