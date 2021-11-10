import axios from 'axios';
// const axios = require('axios');

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const FetchProductInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        "content-type": "application/json",
        accept: "application/json",
    },
});
// const dispatch = useDispatch();

FetchProductInstance.interceptors.response.use(
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

export default FetchProductInstance;
