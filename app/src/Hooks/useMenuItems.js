import useSWR from "swr";
import axios from "axios";
import { mockMenuItems } from "../mock/menu"; // Importing mock data

// Custom hook for fetching categories
export const useMenuItems = () => {
  const {
    data: menuItems,
    error,
    isLoading,
  } = useSWR("menuItems", async () => {
    const response = await axios.post("http://localhost:8000/api/v1/user/menu/list?skip=0&limit=0", {
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

  return { menuItems, error, isLoading };
};
