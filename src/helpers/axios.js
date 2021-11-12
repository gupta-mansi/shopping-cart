import axios from 'axios';

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const GetProductInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        "content-type": "application/json",
        accept: "application/json",
    },
});

//API URLs

export const apiUrl = {
  GET_PRODUCTS: '/products',
};

GetProductInstance.interceptors.response.use(
    function (response) {
        console.log('axios_response',response);
      return response
    },
    function (error) {
      const { data } = error.response;
      if (data && data.message) {
      }
      return Promise.reject(data.message);
    }
  );

export default GetProductInstance;
