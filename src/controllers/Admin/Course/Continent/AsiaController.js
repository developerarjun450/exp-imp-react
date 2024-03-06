import AsiaService from "../../../../services/Admin/Course/Continent/AsiaService";

const AsiaController = {
  fetchCountryList: async (token) => {
    try {
      const response = await AsiaService.countryList(token);
      return response;
    } catch (error) {
      throw error;
    }
  },
  fetchInstituteDetailsByCountry: async(token,contineny,countryId) => {
    try {
      const response = await AsiaService.instituteListByCountry(token,contineny,countryId);
      return response;
    } catch(error) {
      throw error
    }
  }
};

export default AsiaController;
