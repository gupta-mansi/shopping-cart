import GetProductInstance, { apiUrl } from "../axios";

export const getProductsReq = () => {
    return GetProductInstance({
      method: "GET",
      url: apiUrl.GET_PRODUCTS,
    });
  };

  