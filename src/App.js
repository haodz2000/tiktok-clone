import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/layout';
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from './routes';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            if(route.layout){
              Layout = route.layout
            }else if(route.layout === null){
              Layout = Fragment
            }
            const Page = route.component;
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />;
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
