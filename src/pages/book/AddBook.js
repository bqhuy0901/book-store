import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/AddBook.css";

const initialState = {
  title: "",
  description: "",
  price: "",
};

const AddBook = () => {
  const [state, setState] = useState(initialState);

  const { title, description, price } = state;

  const { _id } = useParams();

  useEffect(() => {
    if (_id) {
      getSingleBook(_id);
    }
  }, [_id]);

  const getSingleBook = async (id) => {
    const reponse = await axios.get(`http://localhost:5000/books/${id}`);
    if (reponse.status === 200) {
      setState({
        ...reponse.data[0],
      });
    }
  };

  const history = useNavigate();

  const addBook = async (data) => {
    const reponse = await axios.post("http://localhost:5000/books", data);
    if (reponse.status === 200) {
      setState(data);
    }
  };

  const updateBook = async (data, id) => {
    const reponse = await axios.put(`http://localhost:5000/books/${id}`, data);
    if (reponse.status === 200) {
      getSingleBook(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !price) {
      addBook(state);
    } else {
      updateBook(state, _id);
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
        <label htmlFor="title">Tên Sách</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title book...."
          onChange={handleInputChange}
          value={title}
        />
        <label htmlFor="description">Mô tả Sách</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter description book...."
          onChange={handleInputChange}
          value={description}
        />
        <label htmlFor="price">Giá</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter price book...."
          onChange={handleInputChange}
          value={price}
        />
        <input type="submit" value={_id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddBook;
