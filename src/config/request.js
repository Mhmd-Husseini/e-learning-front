import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export const sendRequest = async ({
  method = "GET",
  route,
  body,
  includeHeaders = true,
}) => {
  if (!route) throw Error("URL required");

  let token = localStorage.getItem('token')
  axios.defaults.headers.authorization = includeHeaders
    ? `Bearer ${token}`
    : "";

  try {
    const response = await axios.request({
      method,
      url: route,
      data: body,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};