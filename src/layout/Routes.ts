import Home from "../components/pages/Home/Home";
import PassportRegistrationForm from "../components/pages/passportRegistrationForm/PassportRegistrationForm";
import { UserRouteConfig } from "../components/routing/PrivateRoute";
import { AccessType } from "./accessType";

export const commonSiteMap: UserRouteConfig[] = [
  { exact: true, path: "/", Component: Home, access: AccessType.YES },
  {
    exact: true,
    path: "/PassportRegistration",
    Component: PassportRegistrationForm,
    access: AccessType.YES,
  },
];
