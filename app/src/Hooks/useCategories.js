import useSWR from "swr";
import axios from "axios";
import { mockCategories } from "../mock/category"; // Importing mock data

// Custom hook for fetching categories
export const useCategories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR("categories", async () => {
    const response = await axios.post("http://localhost:8000/api/v1/user/category/list?skip=0&limit=0", {
      filters: {
        restaurantRef: "6881b196255b88026d76cc25"
      }
    }, {
      headers: {
        'x-auth-deviceid': '1234',
        'x-auth-devicetype': 3
      }
    });

    return response.data; // Use mock data for now
  });

  return { categories, error, isLoading };
};
