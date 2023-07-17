import axios from "axios"

// async의 반환값은 무조건 promise
export const postLogin = async(params) => {

    const res = await axios.post('http://localhost:8080/api/member/login', params)

    return res.data

}