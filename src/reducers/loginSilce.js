import { createSlice } from "@reduxjs/toolkit";

const initState = {
    email:'',
    signde:false
}

const loginSilce = createSlice({
    name: 'loginSlice',
    initialState: initState,
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin", payload)

            return {email: payload.email, signed:true}
        }
    }
})

export const {requestLogin} = loginSilce.actions

export default loginSilce.reducer