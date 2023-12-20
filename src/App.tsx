import React, { FC, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import "./App.css";
import "country-flag-icons/3x2/flags.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { commonSiteMap } from "./layout/Routes";
import PrivateRoute, {
  UserRouteConfig,
} from "./components/routing/PrivateRoute";
import {
  SET_IS_DESKTOP,
  SET_IS_MOBILE,
  SET_SCREENSIZE,
} from "./state/actions/types/screenSizeType";
import { useDispatch } from "react-redux";
import { refresh } from "./api/refresh";
import { getCookie } from "./components/common/enum/functions";

const App: FC = () => {
  let routesToBeMapped: UserRouteConfig[] = [...commonSiteMap];
  const dispatch = useDispatch();
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      dispatch({
        type: SET_IS_MOBILE,
        payload: true,
      });
    } else {
      dispatch({
        type: SET_IS_DESKTOP,
        payload: true,
      });
    }
    dispatch({
      type: SET_SCREENSIZE,
      payload: window.innerWidth,
    });
  };
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  useEffect(() => {
    refresh(getCookie("user"));
  }, []);
  return (
    <HashRouter>
      {/* {!isOnProfile && <Header />}
       {isOnProfile && <SideNav />} */}
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

      {/* {!isOnProfile && <Footer />} */}
    </HashRouter>
  );
};

export default App;
