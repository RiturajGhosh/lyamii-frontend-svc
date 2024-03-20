import { FC, LazyExoticComponent, useEffect } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { AccessType } from "../../layout/accessType";
import styles from "./PrivateRoute.module.scss";
import { SET_LOCATION } from "../../state/actions/types/locationType";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/header/Header";
import SideNav from "../common/sideNav/SideNav";
import Footer from "../common/footer/Footer";
import { Col, Row } from "react-bootstrap";
import Login from "../common/login/Login";
import { paths } from "../common/enum/enum";
import { selectSideNav } from "../../state/selectors/selectSideNav";
import { selectScreenSize } from "../../state/selectors/selectScreenSize";

type ComponentProps =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>
  | LazyExoticComponent<React.ComponentType<any>>;

export type UserRouteConfig = {
  exact: boolean;
  path: string;
  Component: ComponentProps;
  access: AccessType;
};
export type PrivateRouteProps = {
  exact: boolean;
  path: string;
  component: ComponentProps;
  access: string;
};

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  path,
  access,
  ...rest
}) => {
  const dispatch = useDispatch();
  const screenSize = useSelector(selectScreenSize);
  const sideNav = useSelector(selectSideNav);
  useEffect(() => {
    dispatch({
      type: SET_LOCATION,
      payload: path || window.location,
    });
  }, [window.location, path]);
  const loginError = false; //will use selector
  // const openNav = () => {
  //   const ele = (document?.getElementById("sidenav") as HTMLElement).className.includes("d-flex");
  //   console.log(ele)
  //   return ele?.className.includes("d-flex");
  // };
  const checkErrorAndLogin = () => {
    if (loginError) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.mainContainer}>
        {!paths.includes(path) && !path.includes("profile") && <Header />}
        {path.includes("profile") && (
          <Row>
            <Col
              // id="sidenav"
              className="p-0 m-0 position-fixed"
              style={{
                zIndex: "1",
                maxWidth: "0px",
              }}
            >
              {/* <span
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={() => openNav()}
              >
                open
              </span> */}
              <SideNav />
            </Col>
            <Col
              id="main"
              className="p-0"
              style={{
                zIndex: "0",
                marginLeft:
                  !sideNav.hidden && screenSize.isDesktop ? "260px" : "20px",
              }}
            >
              <Route path={path} render={(props) => <Component {...props} />} />
            </Col>
          </Row>
        )}
        {(path.includes("login") || path.includes("signup")) && (
          <Col style={{ background: "#b4f5c5" }}>
            <Login />
          </Col>
        )}
        {!path.includes("profile") && !path.includes("login") && (
          <Route path={path} render={(props) => <Component {...props} />} />
        )}
        {!paths.includes(path) && !path.includes("profile") && <Footer />}
      </div>
    );
  };
  return <Route {...rest} render={() => checkErrorAndLogin()} />;
};

export default PrivateRoute;
