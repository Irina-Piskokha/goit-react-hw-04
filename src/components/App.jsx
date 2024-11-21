import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "./Loader/Loader.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === null) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchImages(query, page);
        setIsLoading(false);
        setTotalPages(total_pages);
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query, page]);

  const handleChangeQuery = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const onClickLoadMoreBtn = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {page < totalPages && <LoadMoreBtn onLoadMore={onClickLoadMoreBtn} />}
    </div>
  );
}

export default App;
