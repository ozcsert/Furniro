import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom"
import CreateAccount from "./components/CreateAccount";



export function Layout() {

    return (
        <>
            <Navbar />
            {/* <main>
                <Outlet />
            </main>
            <Footer /> */}
            <CreateAccount />

        </>
    )
}