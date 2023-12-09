import ContainerSection from "../components/common/container/Container";
import Login from "../components/common/login/Login";
import SideNav from "../components/common/sideNav/SideNav";
import TourDetailCard from "../components/common/tourDetailCard/TourDetailCard";
import Home from "../components/pages/Home/Home";
import BackpackersTours from "../components/pages/backpackersTours/BackpackersTours";
import BharatTours from "../components/pages/bharatTours/BharatTours";
import ComboTours from "../components/pages/comboTours/ComboTours";
import Contact from "../components/pages/contact/Contact";
import CustomerReviews from "../components/pages/customerReview/CustomerReview";
import Dashboard from "../components/pages/dashboard/Dashboard";
import ExploreDestination from "../components/pages/exploreDestination/ExploreDestination";
import Hostel from "../components/pages/hostel/Hostel";
import Hotel from "../components/pages/hotel/Hotel";
import PassportRegistrationForm from "../components/pages/passportRegistrationForm/PassportRegistrationForm";
import Personal from "../components/pages/personal/Personal";
import Profile from "../components/pages/profile/Profile";
import { UserRouteConfig } from "../components/routing/PrivateRoute";
import { AccessType } from "./accessType";

export const commonSiteMap: UserRouteConfig[] = [
  { exact: true, path: "/", Component: Home, access: AccessType.YES },
  {
    exact: true,
    path: "/passportRegistration",
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
  {
    exact: true,
    path: "/tour-detail",
    Component: TourDetailCard,
    access: AccessType.YES,
  }, {
    exact: true,
    path: "/profile",
    Component: Profile,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/profile/personalData",
    Component: Personal,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/profile/dashboard",
    Component: Dashboard,
    access: AccessType.YES,
  },
  {
    exact: true,
    path: "/login",
    Component: Login,
    access: AccessType.YES,
  },{
    exact: true,
    path: "/addHotel",
    Component: Hotel,
    access: AccessType.YES,
  },{
    exact: true,
    path: "/addHostel",
    Component: Hostel,
    access: AccessType.YES,
  },
];
