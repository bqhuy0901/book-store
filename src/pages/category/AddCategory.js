import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/AddBook.css";

const initialState = {
  title: "",
  description: "",
};

const AddCategory = () => {
  const [state, setState] = useState(initialState);

  const { title, description } = state;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleCategory(id);
    }
  }, [id]);

  const getSingleCategory = async (id) => {
    const reponse = await axios.get(`http://localhost:5000/category/${id}`);
    if (reponse.status === 200) {
      setState({
        ...reponse.data[0],
      });
    }
  };

  const history = useNavigate();

  const addCategory = async (data) => {
    const reponse = await axios.post("http://localhost:5000/category", data);
    if (reponse.status === 200) {
      setState(data);
    }
  };

  const updateCategory = async (data, id) => {
    const reponse = await axios.put(`http://localhost:5000/category/${id}`,data );
    if (reponse.status === 200) {
      getSingleCategory(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addCategory(state);
    } else {
      updateCategory(state, id);
    }
    setTimeout(() => history("/"), 500);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form
        style={{
          margin: "atuo",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
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
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddCategory;
