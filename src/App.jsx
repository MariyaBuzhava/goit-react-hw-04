// import axios from "axios";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImagesWithTopic } from "./images-api.js";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

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
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Image Search</h1>
      <SearchBar onSubmit={handleSubmit} />

      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
    </>
  );
}

export default App;

// axios.get(
//   "https://api.unsplash.com/photos/?client_id=DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g"
// );

// render(
//   <DNA
//     visible={true}
//     height="80"
//     width="80"
//     ariaLabel="dna-loading"
//     wrapperStyle={{}}
//     wrapperClass="dna-wrapper"
//   />
// );

// const response = await axios.get(
//   "https://api.unsplash.com/photos/?client_id=DANKlgAbccLybPfVyNlkfj3soumKRCnnLisBk1-go5g"
// );
// console.log(response);
// setImages(response.data.hits);
