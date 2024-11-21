import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./ImageModal/ImageModal.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (query === null) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setTotalPages(total_pages);
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
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

  // Modal window

  function openModal(url, alt) {
    setIsOpenModal(true);
    setModalAlt(alt);
    setModalUrl(url);
  }

  function closeModal() {
    setIsOpenModal(false);
    setModalAlt("");
    setModalUrl("");
  }

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      <ImageGallery images={images} isModalOpen={openModal} />
      {isError && <ErrorMessage />}
      {page < totalPages && <LoadMoreBtn onLoadMore={onClickLoadMoreBtn} />}
      <ImageModal
        isOpen={isOpenModal}
        isClose={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
}

export default App;
