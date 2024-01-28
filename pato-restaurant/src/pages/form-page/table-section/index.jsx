import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { getAllData, getPorductDeleteId } from "../../../services";

const TableSection = () => {
  const [product, setProductData] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8080/menu")
  //       .then((res) => setProductData(res.data));

  //     return () => {};
  //   }, []);

  const getData = async () => {
    setProductData(await getAllData());
  };

  useEffect(() => {
    // console.log(getAllData());
    getData();
  }, []);

  const deleteBtn = (id) => {
    let updatedProduct = product.filter((item) => item.id !== id);
    setProductData(updatedProduct);
    console.log(updatedProduct);
    getPorductDeleteId(id);
  };
  return (
    <>
      <section id="table-section">
        <div className="container">
          <div className="table-section">
            <div className="input-btn">
              <form action="">
                <input type="search" placeholder="Search..." id="search" />
              </form>
              <button className="sort-btn">Ascending</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Delete/Edit</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.desc}</td>
                      <td>$ {item.price}.00</td>
                      <td>{item.category}</td>
                      <td>
                        <button onClick={() => deleteBtn(item.id)}>
                          Delete
                        </button>{" "}
                        <button>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableSection;
