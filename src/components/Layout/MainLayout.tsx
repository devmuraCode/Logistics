import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { FC, Suspense } from "react"
import { Outlet } from "react-router-dom"
import RegisterModal from "@/containers/modals/RegisterModa"
import LoginModal from "@/containers/modals/LoginModal"
import TopNavbar from "../navbar/TopNavbar"

const MainLayout: FC = () => {
    return (
        <div>
            <TopNavbar/>
            <hr className="h-px bg-gray-200 border-border" />
            <Navbar />
            <div className="grow">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
            <RegisterModal/>
            <LoginModal/>
        </div>
    )
}

export default MainLayout