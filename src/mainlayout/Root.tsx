
import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";


const Root = () => {
    return (

        <div>
            <Header />
            <div className=" min-h-[calc(100vh-68px)]">
                <Outlet />
            </div>

        </div>
    );
};

export default Root;