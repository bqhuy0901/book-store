import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'
import '../css/ViewBook.css'


const VIewBook = () => {
    const [book,setBook] = useState(null)

    const {id} = useParams();

  useEffect(()=>{
    if(id){
      getSingleBook(id);
    }
  },[id])



  const getSingleBook = async (id) => {
      const reponse  = await axios.get(`http://localhost:5000/books/${id}`)
      if(reponse.status === 200){
          setBook({
            ...reponse.data[0]
          })
      }
  }

    return (
        <div style={{marginTop: "150px"}}>
            <div className='card'>
                <div className='card-header'>
                    <p>Thông tin chi tiết của sách</p>
                </div>
            </div>
            <div className='container'>
                <strong>ID:</strong>
                <strong>{id}</strong>
                <br/>
                <br/>
                <strong>Title:</strong>
                <strong>{book.title}</strong>
                <br/>
                <br/>
                <strong>Description:</strong>
                <strong>{book.description}</strong>
                <br/>
                <br/>
                <strong>Price:</strong>
                <strong>{book.price}</strong>
                <br/>
                <br/>
                <Link to="/">
                    <button className='btn btn-edit'>Trở về trang chủ</button>
                </Link>
            </div>
        </div>
    )
}

export default VIewBook
