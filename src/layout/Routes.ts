import ContainerSection from "../components/common/container/Container";
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
  {
    exact: true,
    path: "/about",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/joinus",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/faqs",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/contact",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/mission",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/termconditions",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/reviews",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/helpdesk",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/feedback",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/profile",
    Component: ContainerSection,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/privacypolicy",
    Component: ContainerSection,
    access: AccessType.YES,
  },
];
