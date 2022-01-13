import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Home.css";

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const reponse = await axios.get("http://localhost:5000/category");
    if (reponse.status === 200) {
      setData(reponse.data);
    }
  };

  const onDeleteCategory = async (id) => {
    if (window.confirm("Bạn có muốn xóa thể loại này không ?")) {
      const reponse = await axios.delete(
        `http://localhost:5000/Category/${id}`
      );
      if (reponse.status === 200) {
        getCategory();
      }
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <table className="table-cat">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Thể loại</th>
            <th style={{ textAlign: "center" }}>Mô tả</th>
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
                  <td>
                    <Link to={`/updateCategory/${item._id}`}>
                      <button className="btn btn-edit">Sửa</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteCategory(item._id)}
                    >
                      Xóa
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

export default CategoryList;
