import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";


const ListPage = () => {

  const { queryObj, setSearch, moveRead } = useQueryObj()

  console.log("queryObj -----------")
  console.log(queryObj)

  const movePage = (num) => {
    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({ ...queryObj })
  }

  const moveSearch = (type, keyword, size) => {
    queryObj.page = 1
    queryObj.size = size
    queryObj.type = type
    queryObj.keyword = keyword

    setSearch({ ...queryObj })
  }

  return (
    <div>
      <div class="text-2xl font-extrabold">
        Board List Page
      </div>
      <div class="p-4">
        <ListSearchComponent moveSearch={moveSearch} queryObj={queryObj}></ListSearchComponent>
      </div>
      <div class="p-4">
        <ListComponent queryObj={queryObj} movePage={movePage} moveRead={moveRead}></ListComponent>
      </div>
    </div>
  );
}

export default ListPage;