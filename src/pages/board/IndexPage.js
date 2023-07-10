import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  return ( 
    <BasicLayout>
      <div className="mt-4 p-4 bg-gray-100 text-white flex justify-center">
        <div className="underline font-extrabold text-black m-2 p-2">List</div>
        <div className="underline font-extrabold text-black m-2 p-2">Register</div>
      </div>
      <div className="h-[50vh] bg-white w-full border-2">
        <Outlet></Outlet>
      </div>
    </BasicLayout>
   );
}
 
export default IndexPage;