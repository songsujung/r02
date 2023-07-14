import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import TodoSlice from "../reducers/todoSlice";
import LoginSilce from "../reducers/loginSilce";

// 이 함수의 결과물은 스토어이다.
export default configureStore({
    reducer : {
        counter: countSlice,
        todo: TodoSlice,
        login: LoginSilce
    }
})