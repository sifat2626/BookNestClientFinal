import React from "react";
import { useFilterContext } from "../../../context/FilterProvider.jsx"; // Adjust the import path
import axios from "axios";
import BookCard from "../../../components/category/BookCard";
import "./ProductPanel.css";

const ProductPanel = () => {
  const {
    selectedCategory,
    selectedPublication,
    selectedAuthor,
    minPrice,
    maxPrice,
    sort,
    setSort,
    perPage,
    setPerPage,
    books,
    loading,
    total,
    handleLoadMore,
    handleClearFilter,
  } = useFilterContext(); // Use the context hook

  // Fetch the filtered books from the API and set the books state
  const fetchFilteredBooks = async () => {
    try {
      // Construct the query params based on selected filter criteria
      const queryParams = new URLSearchParams();
      if (selectedCategory) queryParams.append("categories", selectedCategory);
      if (selectedPublication) queryParams.append("publications", selectedPublication);
      if (selectedAuthor) queryParams.append("authors", selectedAuthor);
      if (minPrice) queryParams.append("minPrice", minPrice);
      if (maxPrice) queryParams.append("maxPrice", maxPrice);
      if (sort) queryParams.append("sort", sort);
      if (perPage) queryParams.append("perPage", perPage);

      // Fetch filtered books
      const response = await axios.get(
        `https://book-nest-backend.onrender.com/api/v1/filter?${queryParams}`
      );
      const data = response.data;

      setBooks(data.filteredBooks);
    } catch (error) {
      console.error("Error fetching filtered books:", error);
    }
  };

  useEffect(() => {
    fetchFilteredBooks();
  }, [
    selectedCategory,
    selectedPublication,
    selectedAuthor,
    minPrice,
    maxPrice,
    sort,
    perPage,
  ]);

  return (
    <div className="product-panel">
      {/* Render your filter options */}
      {/* ...

      {/* Render the filtered books */}
      <div className="row py-5">
        {books.map((book) => (
          <div className="col-6 col-md-3 mt-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="row">
        <div className="col load-more text-center">
          {total > books.length && (
            <button
              className={`button-load mt-4 ${loading ? "loading" : ""}`}
              type="button"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPanel;
