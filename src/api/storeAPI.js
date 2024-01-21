import axios from "axios";

const storeAPI = async (requestConfig) => {
  const response = await axios(requestConfig);
  return response;
};

export default storeAPI;
