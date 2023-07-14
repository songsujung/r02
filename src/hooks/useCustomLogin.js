import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const useCustomLogin = () => {

    const loginInfo = useSelector(state => state.login)

    const navigate = useNavigate()

    useEffect(() => {

        console.log("signed: " + loginInfo.signed)
        if(!loginInfo.signed) {
            navigate('/member/login')
        }
    },[loginInfo.signed])

    return {loginInfo}

}
 
export default useCustomLogin