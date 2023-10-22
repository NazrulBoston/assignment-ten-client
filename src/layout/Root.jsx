import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <div><Toaster/></div>
         <Outlet></Outlet>
         
        </div>
    );
};

export default Root;