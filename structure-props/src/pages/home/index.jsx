import React from "react";
import Table from "../../components/table";

function HomePage({ users }) {
  return (
    <>
      <Table users={users} />
    </>
  );
}

export default HomePage;
