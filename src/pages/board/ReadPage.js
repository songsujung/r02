import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";


const ReadPage = () => {

  const {queryObj, moveList} = useQueryObj()
  const {bno} = useParams()

  console.log(bno)
  console.log(queryObj)

  return ( 
    <div>
      <p className="text-2xl font-extrabold">Board Read Page</p>
      
      <ReplyWrapper bno = {bno}></ReplyWrapper>

      <ReadComponent bno = {bno}></ReadComponent>

      <button onClick={e => moveList()}>List</button>
    </div>
  );
}
 
export default ReadPage;