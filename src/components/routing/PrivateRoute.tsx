import { FC, LazyExoticComponent, useEffect } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { AccessType } from "../../layout/accessType";
import styles from "./PrivateRoute.module.scss";
import { SET_LOCATION } from "../../state/actions/types/locationType";
import { useDispatch } from "react-redux";
import Header from "../common/header/Header";
import SideNav from "../common/sideNav/SideNav";
import Footer from "../common/footer/Footer";
import { Col, Row } from "react-bootstrap";

type ComponentProps =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>
  | LazyExoticComponent<React.ComponentType<any>>;

export type UserRouteConfig = {
  exact: boolean;
  path: string | string[];
  Component: ComponentProps;
  access: AccessType;
};
export type PrivateRouteProps = {
  exact: boolean;
  path: string | string[];
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
  useEffect(() => {
    dispatch({
      type: SET_LOCATION,
      payload: path || window.location,
    });
  }, [window.location, path]);
  const loginError = false; //will use selector
  const checkErrorAndLogin = () => {
    if (loginError) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.mainContainer}>
        {!path.includes("profile") && <Header />}
        {path.includes("profile") && (
          <Row>
            <Col className="col-2 p-0 m-0">
              <SideNav />
            </Col>
            <Col className="">
              <Route path={path} render={(props) => <Component {...props} />} />
            </Col>
          </Row>
        )}
        {!path.includes("profile") && (
          <Route path={path} render={(props) => <Component {...props} />} />
        )}
        {!path.includes("profile") && <Footer />}
      </div>
    );
  };
  return <Route {...rest} render={() => checkErrorAndLogin()} />;
};

export default PrivateRoute;
