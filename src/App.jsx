// import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/images-api.js";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    const handleSubmit = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(query, page);

        setImages((prev) => [...prev, ...data.results]);

        setTotalPages(data.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSubmit();
  }, [query, page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (topic) => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <h1>Image Search</h1>
      <SearchBar onSubmit={handleSetQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {!loading && page < totalPages && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
    </>
  );
}

export default App;
