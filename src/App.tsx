import React, { FC, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import "./App.css";
import "./styles/index.scss";
import "country-flag-icons/3x2/flags.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
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
import { getCookie } from "./components/common/enum/functions";
import { refreshApi } from "./api/refreshApi";

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
    let elements: any = document.getElementsByClassName("resize");
    if (elements.length < 0) {
      return;
    }
    let len = elements.length;
    for (let i = 0; i < len; i++) {
      let el: HTMLElement = elements[i];
      el.style.fontSize = "100%";
      for (var size = 100; el.scrollHeight > el.clientHeight; size -= 10) {
        el.style.fontSize = size + "%";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    const cookie = getCookie("user");
    const user = cookie && JSON.parse(cookie);
    user.token && refreshApi(user);
  }, []);
  return (
    // <HashRouter>
    //    {!isOnProfile && <Header />}
    //     {isOnProfile && <SideNav />}
    //    <HashRouter>

    <BrowserRouter>
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
    </BrowserRouter>
    //  </HashRouter>
    //   {!isOnProfile && <Footer />}
    //  </HashRouter> */}
  );
};

export default App;
