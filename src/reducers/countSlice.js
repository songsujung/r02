import { createSlice } from "@reduxjs/toolkit";


// 여러개의 객체가 들어감 객체 스타일로 생성
const countSlice = createSlice({
    name : "CountSlice",
    // 초기 상태
    initialState : {num : 5},
    // 비동기 처리할 떄 extraReducers 사용
    reducers : {
      // 함수 첫번째 파라미터는 무조건 state
      inc: (state, param, third) => {
        console.log(state)
        console.log(param)
        console.log(third)
        console.log("-----------------------")
        return {num: state.num + param.payload} // state값(5)에 param.payload한 값이 새로운 상태
      },
      dec: (state, param, third) => {
        console.log(state)
        console.log(param)
        console.log(third)
        console.log("-----------------------")
        return {num: state.num - param.payload}  // state값(5)에 param.payload한 값이 새로운 상태
      }
    }
})

// 호출할 수 있게 export
export const {inc , dec} = countSlice.actions

export default countSlice.reducer