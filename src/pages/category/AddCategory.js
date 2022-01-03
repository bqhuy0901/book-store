import React, { useState,useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "../css/AddBook.css";


const initialState = {
  title: "",
  description: "",
};

const AddCategory = () => {
  const [state, setState] = useState(initialState);

  const { title, description } = state;

  const {_id} = useParams();

  useEffect(()=>{
    if(_id){
      getSingleBook(_id);
    }
  },[_id])



  const getSingleBook = async (id) => {
      const reponse  = await axios.get(`http://localhost:5000/category/${id}`)
      if(reponse.status === 200){
          setState({
            ...reponse.data[0]
          })
      }
  }



  const history = useNavigate();

  const addBook = async (data) => {
    const reponse = await axios.post("http://localhost:5000/category", data);
    if (reponse.status === 200) {
     setState(data);
    }
  };

  const updateBook = async (data,id) => {
    const reponse = await axios.put(`http://localhost:5000/category/${id}`, data);
    if (reponse.status === 200) {
      getSingleBook(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if(!_id){
        addBook(state);
      }else{
        updateBook(state,_id);
      }
   setTimeout(()=>history("/"),500);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
       ...state,
        [name]: value 
      });
  };

  return (
    <div style={{ marginTop: "50px" }} >
      <form
        style={{
          margin: "atuo",
          padding: "15px",
          maxWidth: "400px",
          alignContent:"center"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Thê loại</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title book...."
          onChange={handleInputChange}
          value={title}
        />
        <label htmlFor="description">Mô tả thể loại</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter description book...."
          onChange={handleInputChange}
          value={description}
        />
        <input type="submit" value={_id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddCategory;