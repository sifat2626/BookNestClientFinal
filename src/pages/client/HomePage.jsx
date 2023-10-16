import React, { useEffect, useState } from "react";
import { SearchState } from "../../context/SearchContext.jsx";
import axios from "axios";
import HomeComponents from "../../components/client/HomeComponents.jsx";
import BookCard from "../../components/category/BookCard.jsx";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const { search, setSearch } = SearchState();
  const [searchedBook, setSearchedBook] = useState([]);
	useEffect(() => {
		setSearch("");
	}, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://book-nest-backend.onrender.com/api/v1/categories"
        );
        console.log("response: ", response.data);

        // const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (search == undefined || search == "" || search == null) {
      setSearchedBook([]);
    } else {
			const fetchSearchedBook = async () => {
        try {
          const response = await axios.get(
            `https://book-nest-backend.onrender.com/api/v1/search/books/${search}`
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
    <div>
      {searchedBook.length > 0 && (
        <div className="container">
          <div className="row py-5 ">
            {searchedBook?.map((book) => {
              return (
                <div className="col-6 col-md-3 mt-4">
                  <BookCard key={book.id} book={book} category={book.category._id} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {searchedBook.length === 0 &&
        categories.map((category, i) => (
          <HomeComponents key={i} category={category} />
        ))}
    </div>
  );
};

export default HomePage;
