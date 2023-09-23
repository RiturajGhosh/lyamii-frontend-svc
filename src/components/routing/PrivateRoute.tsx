import { FC, LazyExoticComponent } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { AccessType } from "../../layout/accessType";
import styles from "./PrivateRoute.module.scss";

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
  const loginError = false; //will use selector
  const checkErrorAndLogin = () => {
    if (loginError) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.mainContainer}>
        <Route path={path} render={(props) => <Component {...props} />} />
      </div>
    );
  };
  return <Route {...rest} render={() => checkErrorAndLogin()} />;
};

export default PrivateRoute;
