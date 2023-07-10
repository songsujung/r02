import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
import ListPageComponent from "../common/ListPageComponent";

// PageResponseDTO 껍데기
const initState = {
    dtoList : [],
    end : 0,
    start : 0,
    next : false,
    prev : false,
    pageNums : [], // 배열로 해야 반복문 처리 편리  
    page : 0,
    size : 0,
    requestDTO : null
  }

const ReplyList = ({bno,page,last,movePage ,refresh , changeCurrent}) => {

    // console.log("Reply List ..bno: " + bno )

    const [listData, setListData] = useState(initState) // 오류 안 나게 초기값을 설정

    useEffect(() => {
        getRepliesOfBoard(bno,page,last).then(data => {
            console.log(data)
            
            setListData(data)
        })

        // bno , page , last가 변경될 떄
    },[bno ,page , last ,refresh])

    return ( 
        <div>
            <div className="text-2xl font-extrabold">
                Reply List
            </div>
            <div className="bg-green-50">
                <ul className="border- p-3">
                    {listData.dtoList.map( reply => <li key={reply.rno}
                    onClick={() => changeCurrent(reply.rno)}
                    >
                        {reply.rno} - {reply.replyText} 
                    </li>)}
                </ul>

                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
            </div>
        </div>
     );
}
 
export default ReplyList;