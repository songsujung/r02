import BasicLayout from "../../layouts/BasicLayout";
import LoginComponent from "../../components/member/LoginComponent";
import KakaoLoginComponent from "../../components/member/KakaoLoginComponent";

const LoginPage = () => {
    return ( 
        <BasicLayout>
            <div>Login Page</div>
            <LoginComponent></LoginComponent>
            <KakaoLoginComponent></KakaoLoginComponent>
        </BasicLayout>
     );
}
 
export default LoginPage;