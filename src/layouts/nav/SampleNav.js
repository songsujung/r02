import { Link } from "react-router-dom";

const SampleNav = () => {
    return ( 
        <div className="flex m-6 p-4 text-white font-extrabold">
            <div className="m-4 text-3xl underline">
                <Link to="/">Main</Link>
            </div>
            <div className="m-4 text-3xl underline">
                <Link to="/about">About</Link>
            </div>
            <div  className='m-4 text-3xl underline'>
                <Link to="/products/list">Products</Link>
             </div>
            <div className="m-4 text-3xl underline">
                <Link to="/board/list">Board</Link>
            </div>
        </div>
     );
}
 
export default SampleNav;