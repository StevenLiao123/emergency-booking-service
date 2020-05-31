//router.js
import React, { lazy } from 'react';
// import { Home, Details, HospitalList, PainLevel, Record } from '../pages';
import { MainLayout } from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home/HomeContainer'));
const Details = lazy(() => import('../pages/Details/DetailsContainer'));
const HospitalList = lazy(() => import('../pages/HospitalList/HospitalListContainer'));
const PainLevel = lazy(() => import('../pages/PainLevel/PainLevelContainer'));
const Record = lazy(() => import('../pages/Record/RecordContainer'));

const routes = [
  {
    path: "/",
    exact: true,
    title: "Select an illness:",
    layout: MainLayout,
    component: Home
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
