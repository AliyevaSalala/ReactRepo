import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
// import Records from "../../../data/db.json";

const Menu = () => {
  const [productMenu, setProductmenu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/menu")
      .then((data) => setProductmenu(data.data));

    return () => {};
  }, []);

  return (
    <section id="menu">
      {/* {console.log(productMenu)} */}
      <div className="container">
        <div className="menu">
          <div className="menu-btn">
            <button>Drinks</button>
            <button>DESSERT</button>
            <button>MAIN</button>
            <button>STARTERS</button>
          </div>

          <div className="menu-cards">
            {productMenu.map((item) => {
              return (
                <div className="menu-card" key={item.id}>
                  <CiHeart className="heart-icon" />
                  <div className="card-right">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="card-left">
                    <p>$ {item.price}.00</p>
                  </div>
                </div>
              );
            })}
            {/* <div className="menu-card">
              <div className="card-right">
                <h3>PINE NUT SBRISALONA</h3>
                <p>Sed fermentum eros vitae eros</p>
              </div>
              <div className="card-left">
                <p>Price </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
