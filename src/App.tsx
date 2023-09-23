import React, { FC } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Home from "./components/pages/Home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { commonSiteMap } from "./layout/Routes";
import PrivateRoute, {
  UserRouteConfig,
} from "./components/routing/PrivateRoute";

const App: FC = () => {
  let routesToBeMapped: UserRouteConfig[] = [...commonSiteMap];
  return (
    <>
      <Header />
      <HashRouter>
        <Switch>
          {routesToBeMapped.map(({ exact, path, Component, access }) => {
            return (
              <PrivateRoute
                path={path}
                exact={exact}
                component={Component}
                key={JSON.stringify(path)}
                access={access}
              />
            );
          })}
          <Route path="/login" component={Home} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
};

export default App;
