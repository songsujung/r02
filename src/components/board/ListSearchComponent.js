import { useEffect, useState } from "react";

const ListSearchComponent = ({ moveSearch, queryObj }) => {

    // setTimeout(() => {

    //     moveSearch('t','1')

    // },2000) // component가 새로 실행되니까 setTimeout이 실행 되어 계속 로그가 찍힘

    console.log("SearchComponent-----------------")

    const [searchObj, setSearchObj] = useState({ size: 10, type: '', keyword: '' })

    useEffect(() => {

        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''

        setSearchObj({ ...searchObj })
    }, [queryObj])

    return (
        <div className="m-4 p-4 bg-white border-2 border-green-500 rounded-full">
            <select
                className="border-2 border-gray-500  m-2 p-2"
                value={searchObj.type}
                onChange={e => {
                    searchObj.type = e.target.value;
                    setSearchObj({ ...searchObj });
                }}
            >
                <option value={''}>---</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목내용</option>
                <option value={'tcw'}>제목내용작성자</option>
            </select>

            <input
                className="border-2 border-gray-500 m-2 p-2 w-100"
                type="text"
                value={searchObj.keyword}
                onChange={e => {
                    searchObj.keyword = e.target.value;
                    setSearchObj({ ...searchObj });
                }}
            ></input>

            <select
                className="border-2 border-gray-500 m-2 p-2"
                value={searchObj.size}
                onChange={e => {
                    searchObj.size = e.target.value;
                    setSearchObj({ ...searchObj });
                }}
            >
                <option value={5}>5개</option>
                <option value={10}>10개</option>
                <option value={15}>15개</option>
                <option value={20}>20개</option>
            </select>

            <button
                className="p-2 m-2  bg-green-500 text-white rounded-md"
                onClick={e => moveSearch(searchObj.type, searchObj.keyword, searchObj.size)}
            >
                SEARCH
            </button>
        </div>
    );
}

export default ListSearchComponent;