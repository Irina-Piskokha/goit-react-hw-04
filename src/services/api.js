import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = "TwPvkClixrNYyLrRi7VtGevAEfOh0OZJFJArhtCg-kI";

export const fetchImages = async (query, page) => {
  const response = await axios.get(`${BASE_URL}search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 10,
    },
  });
  return response.data;
};
