import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout"

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="mt-4 p-3 bg-white flex ">
                <div className="underline font-extrabold m-2 p-2 ">List</div>
                <div className="underline font-extrabold m-2 p-2 ">
                    <Link to={"register"}>Register</Link>
                </div>
                
            </div>
            <div className="h-[50v] bg-white w-full">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
 
export default IndexPage;