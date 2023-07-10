import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";
import ReplyRead from "./ReplyRead";

// 껍데기 만들기
const initState = {
    bno:0,
    page:1,
    last:false,
    refresh : false,
    current : 0
}

const ReplyWrapper = ({bno}) => {

    // 상태 함수 설정
    const[data, setData] = useState(initState)

    // props로 내려온걸 상태 처리 useEffect
    useEffect(()=>{

        data.bno = bno
        data.last = true
        data.page = 1
        
        setData({...data})

    },[bno])

    // current 값 변경하는 함수
    const changeCurrent = (rno) => {

        data.current=rno
        setData({...data})
    }

    // page를 바꿔주는 기능 설정 num을 받아서 변경
    const movePage = (num) => {

        console.log(num)

        // 받은 num 값으로 페이지를 변경
        data.page = num
        data.last= false
        data.refresh = !data.refresh

        // 상태를 업데이트
        setData({...data})
    }

    const refreshLast = ()=> {

        data.last = true
        data.refresh = !data.refresh
        setData({...data})
    }

    const cancleRead = () =>{
        data.current= 0
        setData({...data})
    }

    const refreshPage = (hide) => {
        data.refresh = !data.refresh

        if(hide) {
            data.cuttent = 0
        }

        setData({...data})
    }

    return ( 
        <div>
            <ReplyInput bno={bno} refreshLast={refreshLast}></ReplyInput>

            {data.current !== 0 ? <ReplyRead rno={data.current} cancleRead={cancleRead} refreshPage={refreshPage}></ReplyRead> : <></>}

            <ReplyList {...data} movePage={movePage} changeCurrent={changeCurrent}></ReplyList>
        </div>
     );
}
 
export default ReplyWrapper;