import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

export const getDataList = async () => {
  const response = await axios.get("posts");
  const responseData = await response.data;
  return responseData;
};

export const addContact = async (payload) => {
  const response = await axios.post("posts", payload);
  const responseData = await response.data;
  return responseData;
};

export const getSingleContact = async (id) => {
  const response = await axios.get(`posts/${id}`);
  const responseData = await response.data;
  return responseData;
};
