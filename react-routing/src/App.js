import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import PageNotFound from "./pages/home/PageNotFound";
import {routesHome, routesAdmin} from "./route"
import HomeTemplate from './template/HomeTemplate';
import AdminTemplate from "./template/AdminTemplate"
import  Admin from "./pages/admin/Admin"



function App() {
  const showMenuHome = routes => {
    if (routes && routes.length >0) {
      return routes.map((item, index) =>  {
        return  (
          <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
          />
        )
      })
    }
  }

  const showMenuAdmin = routes => {
    if (routes && routes.length >0) {
      return routes.map((item, index) =>  {
        return  (
          <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
          />
        )
      })
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}
          {/* {showMenuAdmin(routesAdmin)} */}

          <Route exact={false} path="/admin" component={Admin} />
          <Route path="" component={PageNotFound} />

          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
