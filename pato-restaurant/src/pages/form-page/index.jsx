import React from "react";
import { Form } from "react-router-dom";
import FormSection from "./form-section";
import InputSection from "./form";
import TableSection from "./table-section";

const FormPage = () => {
  return (
    <>
      <FormSection />
      <InputSection />
      <TableSection />
    </>
  );
};

export default FormPage;
