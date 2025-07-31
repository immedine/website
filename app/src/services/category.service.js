// import axiosInstance from '@/lib/axios/axios.interceptor';
import axios from 'axios';
// import { toast } from 'sonner';

// const CATEGORY_API = '/category';

export const categoryService = {
  getCategories: async (params, userType) => {
    // const { skip = 0, limit = 0, filters = {}, sortConfig = {} } = params;

    const response = await axios.post(
      `http://localhost:8000/api/v1/user/category/list?skip=0&limit=0`,
      {
        filters: {
          restaurantRef: "6881b196255b88026d76cc25"
        }
      },
      {
        headers: {
          'x-auth-deviceid': '1234',
          'x-auth-devicetype': 3
        }
      }
    );

    return response.data;
  },

};
