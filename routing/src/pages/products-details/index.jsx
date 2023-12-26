import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div id="details">
      <div className="container">
        <div className="details">
          <h1>ProductsDetails</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            explicabo eius eligendi saepe doloribus ut repudiandae minima velit
            nostrum assumenda voluptates rem dolorem exercitationem, maxime
            delectus a? Exercitationem, magnam odio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, explicabo eius eligendi
            saepe doloribus ut repudiandae minima velit nostrum assumenda
            voluptates rem dolorem exercitationem, maxime delectus a?
            Exercitationem, magnam odio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, explicabo eius eligendi saepe doloribus
            ut repudiandae minima velit nostrum assumenda voluptates rem dolorem
            exercitationem, maxime delectus a? Exercitationem, magnam odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            explicabo eius eligendi saepe doloribus ut repudiandae minima velit
            nostrum assumenda voluptates rem dolorem exercitationem, maxime
            delectus a? Exercitationem, magnam odio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, explicabo eius eligendi
            saepe doloribus ut repudiandae minima velit nostrum assumenda
            voluptates rem dolorem exercitationem, maxime delectus a?
            Exercitationem, magnam odio.
          </p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
