import { Outlet } from "react-router";
import Header from "../components/Header";

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default SharedLayout;