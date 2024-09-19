import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithTopic = async (topic, page = 1, perPage = 5) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: "DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g",
      query: topic,
      page: page,
      per_page: perPage,
    },
  });
  return response.data.results;
};

// /?client_id=DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g=${topic}
