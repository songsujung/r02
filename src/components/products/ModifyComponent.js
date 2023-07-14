import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/productAPI"

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}

const ModifyComponent = ({pno, moveList, moveRead}) => {

    const fileRef = useRef()
    const [product , setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            // data로 상태 업데이트
            setProduct(data)
        })

    },[pno])

    const handleCilckDelete = () => {

        deleteProduct(pno).then(data => {
            alert("삭제 되었습니다.")
        })
    }

    // change 함수 생성
    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({...product})
    }

    const handleClickModify = () => {

        const formData = new FormData();
    
        // 파일 데이터 추가
        // 하나씩 담아줘여함
        formData.append("pno", product.pno)
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)
    
        // 이미지 추가
        if (product.images) {
          for (let pi of product.images) {
            // images = DTO에 images
            formData.append("images", pi)
    
          }
        }
        const arr = fileRef.current.files
    
        for (let file of arr) {
          formData.append("files", file)
        }

        putProduct(formData).then(data =>{
            alert("수정되었습니다.")
            moveRead(pno)
         })
    
    }

    const handleClickDelImg = (fname) => {

        const newArr = product.images.filter(ele => ele != fname)

        product.images = newArr

        setProduct({...product})
    }




    return (
        <div>
            <div className="m-2 p-2 border-2">
                {product.pno}
            </div>

            <div className="m-2 p-2 border-2">
                <input 
                type="text" 
                name="pname"
                value={product.pname}
                onChange={handleChange}
                />
            </div>
            <div className="m-2 p-2 border-2">
            <input 
                type="text" 
                name="pdesc"
                value={product.pdesc}
                onChange={handleChange}
                />
            </div>
            <div className="m-2 p-2 border-2">
            <input 
                type="number" 
                name="price"
                value={product.price}
                onChange={handleChange}
                />
            </div>

            <div>
              <input type="file" ref={fileRef} multiple name="images"></input>
            </div>

            <div className="m-2 p-2 border-2">
              <ul className="list-none">
                {product.images.map( (fname,idx) => 
                <li 
                className="m-2"
                key={idx}>
                  <img src={`http://localhost:8080/view/s_${fname}`}></img> 
                  <button 
                  className=" border-2 border-red-600 bg-red-300 text-red-600 m-2 p-2 rounded-md"
                  onClick={() => handleClickDelImg(fname)}
                  >X</button>
                </li>)}
              </ul>
        
          <div>
            <button className="bg-pink-500 m-2 p-2 border-2 text-3xl rounded-md"
              onClick={handleClickModify}
            >Modify
            </button>

            <button className="bg-blue-500 m-2 p-2 border-2 text-3xl rounded-md"
              onClick={moveList}
            >List
            </button>

            <button className="bg-red-500 m-2 p-2 border-2 text-3xl rounded-md"
              onClick={handleCilckDelete}
            ><img src='./img/delete.png'></img>
            </button>
          </div>
        </div>
        </div>
      );
    }
 
export default ModifyComponent;