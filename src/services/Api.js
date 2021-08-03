import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  key: "22027299-07bfdb6a4719892e2c46636ba",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

async function getFetch(searchQuery, page) {
  const { data } = await axios
    .get("", {
      params: {
        q: searchQuery,
        page,
      },
    })
    .catch(function (error) {
      toast.error(error);
    });

  return data.hits;
}

export { getFetch };
