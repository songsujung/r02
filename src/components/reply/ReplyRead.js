import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

// 껍데기 생성
const initState = {
    rno : 0,
    bno : 0,
    replyText : '',
    replyFile : '',
    replyer : ''
}

const ReplyRead = ({rno , cancleRead, refreshPage}) => {

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })

    },[rno])

    const handleCilckDelete = () => {

        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제 되었습니다.`)
            refreshPage(true)
        })
    }

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickModify = () => {

        putReply(reply).then(data => {
            alert(`${data.result} 수정되었습니다.`)
            refreshPage()
        })
    }

    if(reply.replyText === '해당 글은 삭제되었습니다.'){
        return <></>
    }

    return ( 
        <div className="m-8 p-2 bg-gray-400 rounded-md">
            <div className="m-2 text-lg font-bold text-gray-800">Reply Read {rno}</div>
            <div>
                <div>{rno}</div>
                <div>
                    <input type="text" name="replyText" onChange={handleChange} value={reply.replyText}></input>
                </div>
                <div>{reply.replyer}</div>
            </div>
            <div className="m-2">
                <button className="m-4 p-2 border-2 border-green-700 text-green-700 rounded-md"
                onClick={handleClickModify}
                >MODIFY</button>
                <button className="m-4 p-2 border-2 border-red-700 text-red-700 rounded-md"
                onClick={handleCilckDelete}
                >DELETE</button>
                <button className="m-4 p-2 border-2 border-black rounded-md"
                onClick={cancleRead}>CANCLE</button>
            </div>
        </div>

     );
}
 
export default ReplyRead;