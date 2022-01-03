import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/Home.css';


const Home = () => {
    const [data, setData] = useState([]);


    useEffect(()=>{
        getBooks();
    },[])


    
    const getBooks = async ()=>{
        const reponse = await axios.get("http://localhost:5000/books");
        if(reponse.status === 200){
            setData(reponse.data);
        }
    };

    const onDeleteBook = async (id) => {
        if(window.confirm("Ban muon xoa cuon sach nay khong")){
            const reponse  = await axios.delete(`http://localhost:5000/books/${id}`)
            if(reponse.status === 200){
                getBooks();
            }
        }
    }



    return ( 
        <div style={{marginTop: "50px"}}>
            <table className='table'>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Tên Sách</th>
                        <th style={{textAlign: "center"}}>Mô tả Sách</th>
                        <th style={{textAlign: "center"}}>Giá</th>
                        <th style={{textAlign: "center"}}></th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}><button className='btn btn-edit'>Edit</button></Link>
                                    <button className='btn btn-delete' onClick={()=>
                                     onDeleteBook(item.id)}
                                     >Delete</button>
                                     <Link to={`/view/${item.id}`}><button className='btn btn-edit'>View</button></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Home
