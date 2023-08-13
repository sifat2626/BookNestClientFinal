import React, { Fragment, useEffect, useState } from "react";
import {RxCross2} from "react-icons/rx";
import axios from "axios";
import BookCard from "../../../components/category/BookCard";
import "./ProductPanel.css";
const ProductPanel = ({
  selectedCategory,
  selectedPublication,
  selectedAuthor,
  minPrice,
  maxPrice,
  sort,
  setSort,
}) => {
  const [books, setBooks] = useState([]);
  let [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  let [total, setTotal] = useState(0);
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPerPage((prev) => prev + 4);
    }, 1000);
  };

  useEffect(() => {
    // Fetch the filtered books from the API
    const fetchFilteredBooks = async () => {
      try {
        // Construct the query params based on selected filter criteria
        const queryParams = new URLSearchParams();
        if (selectedCategory) {
          queryParams.append("categories", selectedCategory);
        }
        if (selectedPublication) {
          queryParams.append("publications", selectedPublication);
        }
        if (selectedAuthor) {
          queryParams.append("authors", selectedAuthor);
        }
        if (minPrice) {
          queryParams.append("minPrice", minPrice);
        }
        if (maxPrice) {
          queryParams.append("maxPrice", maxPrice);
        }
        if(sort){
          queryParams.append("sort", sort);
        }
        if(perPage){
          queryParams.append("perPage", perPage);
        }

        // Fetch filtered books
        const response = await axios.get(
          `hhttps://book-nest-backend.onrender.com/api/v1/filter?${queryParams}`
        );
        // const response = await axios.get(`http://localhost:5000/api/v1/filter?authors=kazi%20nazrul%20islam`);
        const data = response.data;
        console.log(`https://book-nest-backend.onrender.com/api/v1/filter?${queryParams}`);
        // console.log(`response = ${JSON.stringify(data)}`)
        setBooks(data.filteredBooks); // Set the fetched data directly to the books state
        setTotal(data.total)
      } catch (error) {
        console.error("Error fetching filtered books:", error);
      }
    };

    fetchFilteredBooks();
  }, [
    selectedCategory,
    selectedPublication,
    selectedAuthor,
    minPrice,
    maxPrice,
    sort,
    perPage
  ]);
const handleClearFilter = () => {
  window.location.reload();
}
  return (
    <Fragment>
      <div className="toolbox">
        <div className="toolbox-left">Number of results: {books.length} 
        <span className="mx-4" style={{cursor:"pointer"}}><a onClick={handleClearFilter} className="mx-4"><RxCross2 style={{color:"red",fontSize:"18px",marginRight:"4px"}}/>Clear Filter</a></span>
        </div>
        <div className="toolbox-right">
          <div className="toolbox-sort">
            <label htmlFor="sortby">Sort by:</label>
            <div className="select-custom">
              <select name="sortby" id="sortby" className="form-control" onChange={(e)=>setSort(e.target.value)}>
                <option value="" selected="selected" disabled>
                  Select One
                </option>
                <option value="atoz">A to Z</option>
                <option value="ztoa">Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-4 my-4">
        {books.length > 0 && <h1 className="my-5">Filtered Books</h1>}
        {books.length > 0
          ? books.map((book) => (
              <div className="col-6 col-md-4 my-4">
                <BookCard book={book} category={book?.category} />
              </div>
            ))
          : ""}
      </div>

      <div className="row">
                <div className="col load-more text-center">
                  {total === books.length ? (
                    ""
                  ) : (
                    <button
                      className={`button-load mt-4 ${loading ? "loading" : ""}`}
                      type="button"
                      onClick={handleLoadMore}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-repeat"
                        fill="currentColor"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                        <path
                          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                          fillRule="evenodd"
                        />
                      </svg>
                      Load More
                    </button>
                  )}
                </div>
              </div>
    </Fragment>
  );
};

export default ProductPanel;
