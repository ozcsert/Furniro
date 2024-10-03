import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import RecentPostsFunctionality from "./components/RecentPostsFunctionality";



export function Layout() {

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <RecentPostsFunctionality />
        </>
    )
}