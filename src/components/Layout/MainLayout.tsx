import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { FC, Suspense } from "react"
import { Outlet } from "react-router-dom"
import RegisterModal from "@/containers/modals/RegisterModa"
import LoginModal from "@/containers/modals/LoginModal"

const MainLayout: FC = () => {
    return (
        <div>
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