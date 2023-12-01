import axios from "axios";
const URLS = {
  BASE_URL: "http://localhost:3000",
};
URLS.SIGNIN = URLS.BASE_URL + "/signin";
URLS.SIGNUP = URLS.BASE_URL + "/signup";
class CALL {
  static GET({ url, headers }) {
    return axios
      .get(url, headers)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  static POST({ url, data, headers }) {
    return axios
      .post(url, data, headers)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default { URLS, CALL };
