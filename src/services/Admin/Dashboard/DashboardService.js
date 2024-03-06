import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:4000/api';

const DashboardService = {
  dashboardDetails: async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/dashboard`, {
        headers: {
          Authorization: token // Pass the token in the Authorization header
        },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message + '--' + error.name;
    }
  },
};

export default DashboardService;
