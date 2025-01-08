import { useState, useEffect } from "react";
import { fetchArticles } from "/src/services/api.js";
import SearchForm from "./SearchForm/SearchForm";
import toast from "react-hot-toast";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import styles from "/src/App.module.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getArticlesData = async () => {
      if (!query) return;

      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchArticles({ query, page });
        setArticles((prev) => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getArticlesData();
  }, [page, query]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) {
      toast.error("Please enter a different search query!");
      return;
    }
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.wrapper}>
      <SearchForm onSubmit={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {articles.length > 0 && (
        <ImageGallery items={articles} onImageClick={handleImageClick} />
      )}

      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}

      {articles.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
    </div>
  );
};

export default App;
