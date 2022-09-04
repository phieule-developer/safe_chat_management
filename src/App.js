import React from 'react';
import 'antd/dist/antd.css'
import './assets/scss/Theme.scss';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { authRoutes, privateRoutes } from './routes';
import SideBar from './layouts/SideBar';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Router>
      <Routes>
        {
          authRoutes.map(({ path, element, key }) => {
            return (
              <Route
                path={path}
                element={element}
                key={key}
              />)
          })
        }

        <Route
          path="/app"
          key="app"
          element={<SideBar></SideBar>}
        >
          {
            privateRoutes.map(({ path, element, key }) => {
              return (
                <Route
                  path={path}
                  key={key}
                  element={element} />
              )
            })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router >
  )
}

export default App;
