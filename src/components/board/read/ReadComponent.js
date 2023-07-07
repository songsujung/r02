import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";

// 껍데기
const initState = {
    bno: 0,
    title : '',
    content : '',
    writer : '',
    regDate : '',
    modDate : ''
}


// bno 가 바뀔때 마다 useStete
const ReadComponent = ({bno}) => {

    const [board , setBoard] = useState(initState)

    useEffect(() => {

        getOne(bno).then(data => {
            // data로 상태 업데이트
            setBoard(data)
        })

    // bno 의존
    },[bno])

    return ( 
        <div>
            <div>
                {board.bno}
            </div>
            <div>
                {board.title}
            </div>
            <div>
                {board.content}
            </div>
            <div>
                {board.writer}
            </div>
            <div>
                {board.regDate}
            </div>
            <div>
                {board.modDate}
            </div>
        </div>
     );
}
 
export default ReadComponent;