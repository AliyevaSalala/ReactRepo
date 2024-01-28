import React from "react";
import "./index.scss";

const InputSection = () => {
  return (
    <>
      <div id="menu-form">
        <div className="container">
          <div className="menu-form">
            <form action="">
              <input type="text" placeholder="Title" /> <br />
              <input type="text" placeholder="Description" /> <br />
              <input type="number" min={1} /> <br />
              <select name="" id="">
                <option value="drinks">drinks</option>
                <option value="starters">starters</option>
                <option value="main">main</option>
                <option value="dessert">dessert</option>
              </select>
              <br />
              {/* <input type="submit" value={submit} /> */}
              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSection;
