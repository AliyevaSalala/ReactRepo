import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const HomePage = () => {
  const BASE_URL = "https://api.adviceslip.com/advice";
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState("");

  //   useEffect(() => {
  //     getAllData();
  //     return () => {};
  //   }, [count]);

  //   const getAllData = async () => {
  //     const res = await axios(`${BASE_URL}`);
  //     // console.log(res.data);

  //     setProduct(res.data);
  //   };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios(`${BASE_URL}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {}
    };
    getData();
  }, [count]);

  const handleClick = async () => {
    try {
      const res = await axios(`${BASE_URL}`);
      setProduct(res.data);
      setCount((count) => count + 1);
    } catch (error) {}
  };

  return (
    <section id="home-page">
      <div className="container">
        <div className="home-page">
          <h1>{product?.slip?.advice}</h1>
          <button
            // onClick={() => {
            //   setCount(count + 1);
            // }}
            onClick={handleClick}
          >
            get advice
          </button>

          <h5>
            You have read <span>{count}</span> pieces of advice
          </h5>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
