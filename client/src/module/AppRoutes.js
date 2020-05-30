//router.js
import { Home, Details, HospitalList, PainLevel, Record } from '../pages';
import { MainLayout } from '../layouts/MainLayout';

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    title: "Select an illness:",
    layout: MainLayout
  },
  {
    path: "/details",
    component: Details,
    title: "Details:",
    layout: MainLayout
  },
  {
    path: "/hospital-list",
    component: HospitalList,
    title: "Our suggested Hospitals:",
    layout: MainLayout
  },
  {
    path: "/pain-level",
    component: PainLevel,
    title: "Select severity level:",
    layout: MainLayout
  },
  {
    path: "/record",
    component: Record,
    title: "Record:",
    layout: MainLayout
  }
];

export default routes;
