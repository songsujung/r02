import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";


const CountButtons = () => {

    const dispatch = useDispatch()

    const handleClickInc = () => {
        dispatch(inc(2, "inc"))
    }
    
    const handleClickDec = () => {
        dispatch(dec(2, "dec"))
    }

    return ( 
        <div>
            <button onClick={handleClickInc}> INC </button>
            <button onClick={handleClickDec}> DEC </button>
        </div>
     );
}
 
export default CountButtons;