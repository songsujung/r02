import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}

const ReadComponent = ({pno, moveList, moveModify}) => {

    const {email} = useSelector(state => state.login)

    const dispatch = useDispatch()

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e => {
            console.log(e)
            moveList()
        })

    }, [pno])

    return ( 
        <div>
            <h1 className="m-2 p-2 border-2">Product Raed</h1>
            <div className="m-2 p-2 border-2">
                {product.pname}
            </div>
            <div className="m-2 p-2 border-2">
            {product.pdesc}
            </div>
            <div className="m-2 p-2 border-2">
                {product.price} 
            </div>
            <div className="m-2 p-2 border-2">
                <ul className="list-none">
                    {product.images.map( (fname,idx) =>
                    <li key={idx}>
                        <img src={`http://localhost:8080/view/s_${fname}`}></img> 
                    </li> )}
                </ul>
            </div>
            <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-sm"
                onClick={() => {
                    dispatch(addCartThunk({email,pno}))
                }}
                >
                    Add Cart
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 rounded-sm"
                onClick={() => moveModify(product.pno)}
                >
                    modify
                </button>
                <button className="bg-gray-800 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-sm"
                onClick={moveList}
                >
                    List
                </button>
            </div>
      </div>
     );
}
 
export default ReadComponent;