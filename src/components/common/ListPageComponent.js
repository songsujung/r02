const ListPageComponent = ({movePage, start, end, prev, pageNums, next, page}) => {

    //event 처리라 핸들을 붙임
    const handleClickPage = (pageNum) =>{
    movePage(pageNum)
    }

    return ( 
        <div className="flex m-4 p-2 justify-center ">
        <ul className="flex ">

        {prev ? <li className="m-2 p-2 bg-blue-500 text-white font-extrabold"
              onClick={()=>handleClickPage(start-1)}
              >PREV</li>:<></>}

        {pageNums.map(num => <li key={num}
              className="m-2 p-2 bg-blue-500 text-white font-extrabold"
              onClick={() => handleClickPage(num)}
              >
                {page === num ? <span className="text-red-500 underline">{num}</span> : <span>{num}</span>}
                </li>)}

              {next ? <li className="m-2 p-2 bg-blue-500 text-white font-extrabold"
              onClick={()=>handleClickPage(end+1)}
              >NEXT</li>:<></>}

        </ul>
      </div>

     );
}
 
export default ListPageComponent;