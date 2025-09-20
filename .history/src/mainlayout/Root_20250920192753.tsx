
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
       
        <div>
         
           
            <div className=" min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
          
        </div>
    );
};

export default Root;