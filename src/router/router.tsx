import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "@/pages/MainPage";
import MainLayout from "@/components/Layout/MainLayout";
import { AboutPage } from "@/pages/AboutPage";
import { CargoPage } from "@/pages/CargoPage";
import TransportationPage from "@/pages/TransportationPage/TransportationPage";

import СontainerDelivryPage from "@/pages/СontainerDelivryPage/СontainerDelivryPage";

import ProductChina from "./../pages/ProductChina/ProductChina";
import DocumentPage from "@/pages/DocumentPage/DocumentPage";
import OemPage from "@/pages/OemPage/OemPage";
import SuppliersPage from "@/pages/SuppliersPage/SuppliersPage";
import ExaminationPage from "@/pages/ExaminationPage/ExaminationPage";
import MarketplacePage from "@/pages/MarketplacePage/MarketplacePage";
import ContactPage from "@/pages/ContactPage/ContactPage";
import NewsPage from "@/pages/NewsPage/NewsPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "/about-us",
  CARGO = "/cargoPage",
  TRANSPORTATION = "/transportation",
  DOCUMENTS = "/documents",
  CONTAINER = "/container",
  OEM = "/oem",
  PRODUCTCHINA = "PRODUCTCHINA",
  SUPPLIERS = "/suppliers",
  EXAMINATION = "/examination",
  MARKETPLACE = "/marketplace",
  CONTACTS = "/contacts",
  NEWS = "/news",
}
export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about-us",
  [AppRoutes.CARGO]: "/cargoPage",
  [AppRoutes.TRANSPORTATION]: "/transportation",
  [AppRoutes.DOCUMENTS]: "/documents",
  [AppRoutes.CONTAINER]: "/container",
  [AppRoutes.OEM]: "/oem",
  [AppRoutes.PRODUCTCHINA]: "/productchina",
  [AppRoutes.SUPPLIERS]: "/suppliers",
  [AppRoutes.EXAMINATION]: "/examination",
  [AppRoutes.MARKETPLACE]: "/marketplace",
  [AppRoutes.CONTACTS]: "/contacts",
  [AppRoutes.NEWS]: "/news",
};

export const router = createBrowserRouter([
  {
    path: RouterPath[AppRoutes.MAIN],
    element: <MainLayout />,
    children: [
      {
        path: RouterPath[AppRoutes.MAIN],
        element: <MainPage />,
      },
      {
        path: RouterPath[AppRoutes.ABOUT],
        element: <AboutPage />,
      },
      {
        path: RouterPath[AppRoutes.CARGO],
        element: <CargoPage />,
      },
      {
        path: RouterPath[AppRoutes.TRANSPORTATION],
        element: <TransportationPage />,
      },
      {
        path: RouterPath[AppRoutes.CONTAINER],
        element: <СontainerDelivryPage />,
      },
      {
        path: RouterPath[AppRoutes.PRODUCTCHINA],
        element: <ProductChina />,
      },
      {
        path: RouterPath[AppRoutes.DOCUMENTS],
        element: <DocumentPage />,
      },
      {
        path: RouterPath[AppRoutes.OEM],
        element: <OemPage />,
      },
      {
        path: RouterPath[AppRoutes.SUPPLIERS],
        element: <SuppliersPage />,
      },
      {
        path: RouterPath[AppRoutes.EXAMINATION],
        element: <ExaminationPage />,
      },
      {
        path: RouterPath[AppRoutes.MARKETPLACE],
        element: <MarketplacePage />,
      },
      {
        path: RouterPath[AppRoutes.CONTACTS],
        element: <ContactPage />,
      },
      {
        path: RouterPath[AppRoutes.NEWS],
        element: <NewsPage />,
      },
    ],
  },
]);
