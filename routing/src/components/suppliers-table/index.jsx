import React from "react";
import "./index.scss";
const SuppliersTable = ({ suppliers }) => {
  return (
    <>
      <div className="table">
     
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Contact Title</th>
              <th>city, street</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactTitle}</td>
                  <td>
                    {item.address.city}, ${item.address.street}
                  </td>
                  <td>{item.address.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SuppliersTable;
