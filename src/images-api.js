import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithTopic = async (topic) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: "DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g",
      query: topic,
    },
  });
  return response.data.results;
};

// /?client_id=DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g=${topic}
