import { useSearchParams } from "react-router-dom";

const KakaoRedirectPage = () => {

    const [searchParams] = useSearchParams()

    const code = searchParams.get('code')

    return ( 
        <div>
            {code}
        </div>
     );
}
 
export default KakaoRedirectPage;