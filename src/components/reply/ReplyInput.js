import { useState } from "react"
import { postReply } from "../../api/repliesAPI"

const initState = {
    bno: 0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyInput = ({bno, refreshLast}) => {

    const[reply , setReply] = useState({...initState})

    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleCilckRegister = (e) => {

        reply.bno = bno;

        postReply(reply).then(data => {
            
            console.log(data)

            alert(`${data.result}번 댓글이 등록되었습니다.`)

            refreshLast()

            setReply({...initState})
        })
    }

    return ( 
        <div className="m-8 p-2 bg-gray-300 rounded-md">
            <div className="m-2 text-lg font-bold text-gray-800">Reply Input</div>
            <div className="m-2">
                <input type="text" name="replyText" value={reply.replyText} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-400" placeholder="reply text"></input>
            </div>
            <div className="m-2">
                <input type="text" name="replyer" value={reply.replyer} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-400" placeholder="replyer"></input>
            </div>
            <div className="m-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md" onClick={handleCilckRegister}>Register</button>
            </div>
        </div>
     );
}
 
export default ReplyInput;