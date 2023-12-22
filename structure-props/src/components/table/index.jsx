import React from "react";
import "./index.scss"


const Table = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name UserName</th>
          <th>Email</th>
          <th>City</th>
          <th>phone</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>
                {user.name} {user.surname}
              </td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};



export default Table;
