import { Router, createBrowserRouter } from "react-router-dom"

import { MainPage } from "@/pages/MainPage"
import MainLayout from "@/components/Layout/MainLayout"
import { AboutPage } from "@/pages/AboutPage"
import { CargoPage } from "@/pages/CargoPage"
import TransportationPage from "@/pages/TransportationPage/TransportationPage"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = '/about-us',
    CARGO = "/cargoPage",
    TRANSPORTATION =  "/transportation"
}
export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about-us',
    [AppRoutes.CARGO]: '/cargoPage',
    [AppRoutes.TRANSPORTATION]: '/transportation'
}

export const  router = createBrowserRouter([
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
        ],
    }
])