const ListPageComponent = ({movePage, start, end, prev, pageNums, next, page}) => {

    //event 처리라 핸들을 붙임
    const handleClickPage = (pageNum) =>{
    movePage(pageNum)
    }

    return ( 
      <div className="flex items-center justify-center mt-8">
      <ul className="flex space-x-4">

        {prev && (
          <li
            className="px-4 py-2 bg-gray-800 hover:bg-red-800 text-white font-semibold rounded-md cursor-pointer"
            onClick={() => handleClickPage(start - 1)}
          >
            PREV
          </li>
        )}

        {pageNums.map(num => (
          <li
            key={num}
            className={`px-4 py-2 font-semibold rounded-md cursor-pointer ${page === num ? 'text-red-800 underline' : ''}`}
            onClick={() => handleClickPage(num)}
          >
            {num}
          </li>
        ))}

        {next && (
          <li
            className="px-4 py-2 bg-gray-800 hover:bg-red-800 text-white font-semibold rounded-md cursor-pointer"
            onClick={() => handleClickPage(end + 1)}
          >
            NEXT
          </li>
        )}

      </ul>
    </div>

     );
}
 
export default ListPageComponent;