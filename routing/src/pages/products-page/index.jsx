import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import SuppliersTable from "../../components/suppliers-table";
import { Spin } from "antd";

const Products = () => {
  const [suppliers, setsuppliers] = useState([]);
  const [productsArr, setproductsArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api/suppliers";
  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios(`${BASE_URL}`);
      // console.log(resp.data);
      setsuppliers(resp.data);
      productsArr(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

//  const handleInputChange=(e)=>{

//   const filtered=

//  }

  return (
    <div id="products">
      <div className="container">
        <div className="products">
          <input
            type="search"
            className="search"
            placeholder="search.."
            onChange={handleInputChange}
            value={searchItem}
          />

          {loading ? (
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          ) : (
            <SuppliersTable suppliers={suppliers} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
