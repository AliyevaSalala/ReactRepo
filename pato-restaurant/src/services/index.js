import axios from "axios";

const BASE_URL = "http://localhost:8080/menu";

export const getAllData = async () => {
  try {
    let res = await axios(`${BASE_URL}`);
    return res.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const getPorductDeleteId = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
