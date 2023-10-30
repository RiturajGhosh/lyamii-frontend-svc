import ContainerSection from "../components/common/container/Container";
import Home from "../components/pages/Home/Home";
import BackpackersTours from "../components/pages/backpackersTours/BackpackersTours";
import BharatTours from "../components/pages/bharatTours/BharatTours";
import ComboTours from "../components/pages/comboTours/ComboTours";
import Contact from "../components/pages/contact/Contact";
import CustomerReviews from "../components/pages/customerReview/CustomerReview";
import ExploreDestination from "../components/pages/exploreDestination/ExploreDestination";
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
    path: "/explore",
    Component: ExploreDestination,
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
    Component: Contact,
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
    Component: CustomerReviews,
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
  {
    exact: true,
    path: "/bharat-tours",
    Component: BharatTours,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/backpackers",
    Component: BackpackersTours,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/combo",
    Component: ComboTours,
    access: AccessType.YES,
  },
];
