import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const reponse = await axios.get("http://localhost:5000/books");
    if (reponse.status === 200) {
      setData(reponse.data);
    }
  };

  const onDeleteBook = async (id) => {
    if (window.confirm("Bạn có muốn xóa cuốn sách này không ?")) {
      const reponse = await axios.delete(`http://localhost:5000/books/${id}`);
      if (reponse.status === 200) {
        getBooks();
      }
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Tên Sách</th>
            <th style={{ textAlign: "center" }}>Mô tả Sách</th>
            <th style={{ textAlign: "center" }}>Giá</th>
            <th style={{ textAlign: "center" }}></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="table-title">{item.title}</td>
                  <td className="table-des">{item.description}</td>
                  <td className="table-price">{item.price}</td>
                  <td>
                    <Link to={`/updateBook/${item._id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteBook(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
