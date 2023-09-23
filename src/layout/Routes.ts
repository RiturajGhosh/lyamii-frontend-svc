import Home from "../components/pages/Home/Home";
import { UserRouteConfig } from "../components/routing/PrivateRoute";
import { AccessType } from "./accessType";

export const commonSiteMap: UserRouteConfig[] = [
  { exact: true, path: "/", Component: Home, access: AccessType.YES },
];
