import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../../components/category/BookCard";
import "./Books.css";
import { SearchState } from "../../context/SearchContext.jsx";
const Books = () => {
  const { search, setSearch } = SearchState();
  const [searchedBook, setSearchedBook] = useState([]);

  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPerPage((prev) => prev + 4);
    }, 1000);
  };

  const fetchBooks = async () => {
    try {
      const { data } = await axios.get(
        `https://book-nest-backend.onrender.com/api/v1/booklist/${page}/${perPage}/0`
      );

      setBooks(data.data[0].Rows);
      setTotal(data.data[0].Total[0].count);
      // console.log("total: " + data.data[0].Total[0].count);
    } catch (error) {
      console.log("error fetching books in Books.jsx", error.message);
    }
  };
  useEffect(() => {
    setSearch("");
    fetchBooks();
  }, []);
  useEffect(() => {
    fetchBooks();
  }, [page, perPage]);
  useEffect(() => {
    if (search == undefined || search == "" || search == null) {
      setSearchedBook([]);
    } else {
      const fetchSearchedBook = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/search/books/${search}`
          );
          console.log("response: ", response.data);
          setSearchedBook(response.data);
        } catch (error) {
          console.error("Error fetching categories:", error.message);
        }
      };
      fetchSearchedBook();
    }
  }, [search]);
  return (
    <div className="container">
      {searchedBook.length > 0 && (
        <div className="container">
          <div className="row py-5 ">
            {searchedBook?.map((book) => {
              return (
                <div className="col-6 col-md-3 mt-4">
                  <BookCard
                    key={book.id}
                    book={book}
                    category={book.category._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {searchedBook.length === 0 && (
        <>
          <div className="row py-5 ">
            {books.map((book) => {
              return (
                <div className="col-6 col-md-3 mt-4">
                  <BookCard key={book.id} book={book} />
                </div>
              );
            })}
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
        </>
      )}
    </div>
  );
};

export default Books;
