import { useEffect, useState } from "react";
import { getList } from "../../api/productAPI";
import ListPageComponent from "../common/ListPageComponent";

// PageResponseDTO
const initState = {
  dtoList: [],
  end: 0,
  start: 0,
  next: false,
  prev: false,
  pageNums: [], // 배열로 해야 반복문 처리 편리  
  page: 0,
  size: 0,
  requestDTO: null
}


const ListComponent = ({ queryObj, movePage, moveRead }) => {

  const [listData, setListData] = useState(initState) // 오류 안 나게 초기값을 설정

  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    })

    // queryObj 안에 저장되어있는 친구들중에 하나라도 바뀌면 바뀌게끔
  }, [queryObj])



  return (
    <div >
      <div className="text-2xl font-extrabold">ListComponent</div>

      <div className="bg-gray-100 p-4">
      <ul className="flex flex-wrap container justify-center">
          {listData.dtoList.map( dto =>
            <li
            className="w-2/5  h-[300px]  bg-gray-200 m-2 p-2 rounded-md shadow-lg" 
            key={dto.pno}
            onClick={() => moveRead(dto.pno)}
            >
           <div>
              <div className="font-extrabold underline">{dto.pno}</div>
        
            <div className="flex justify-center items-center">
              <img src={`http://localhost:8080/view/s_${dto.fname}`}></img> 

            </div>
            <div className="flex justify-center font-extrabold">
                {dto.pname} - {dto.price} 리뷰 {dto.reviewCnt} - {dto.reviewAvg}</div>
            </div>
            </li>)}
        </ul>
      </div>


      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

    </div>
  );

}

export default ListComponent;