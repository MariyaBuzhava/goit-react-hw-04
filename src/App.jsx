// import axios from "axios";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImagesWithTopic } from "./images-api.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(topic);
      setImages(data);
      // const response = await axios.get(
      //   "https://api.unsplash.com/photos/?client_id=DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g"
      // );
      // console.log(response);
      // setImages(response.data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Image Search</h1>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <p>Loading data, please wait ...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images && <ImageGallery images={images} />}
    </>
  );
}

export default App;

// axios.get(
//   "https://api.unsplash.com/photos/?client_id=DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g"
// );
