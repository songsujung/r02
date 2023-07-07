import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null

}

const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [queryObj])

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }

    console.log(createSearchParams(queryObj).toString())

    return (
        <div>
          <div>ListComponent</div>
          <div>
            <ul>
              {/* dto를 {bno , title , writer , replyCount} 구조분해 할당해서 사용하면 편하다! */}
              {listData.dtoList.map(({bno , title , writer , replyCount}) => 
              <li key={bno}
              onClick={() => moveRead(bno)}>
                {bno} - {title} - {replyCount}</li>)}
            </ul>
          </div>

          <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

        </div>
      );
}
 
export default ListComponent;