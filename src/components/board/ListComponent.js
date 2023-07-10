import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI"; // <- 오류아님
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
        <ul className="divide-y divide-green-500">
          {listData.dtoList.map(({ bno, title, writer, replyCount }) => (
            <li
              key={bno}
              onClick={() => moveRead(bno)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              <span className="font-bold">{bno}</span> - {title} - {writer} - {replyCount}
            </li>
          ))}
        </ul>
      </div>


      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

    </div>
  );
}

export default ListComponent;