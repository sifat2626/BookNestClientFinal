import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Book.css";
import axios from "axios";
import BookCard from "../../components/category/BookCard";
import { CartState } from "../../context/CartContext";
import { useAuth } from "../../context/auth";

const Book = () => {
  const [book, setBook] = useState({});
  const [relatedBook, setRelatedBook] = useState([]);
  const [interestedBooks, setInterestedBooks] = useState([]);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const { id, categoryid } = useParams();
  const { state, dispatch } = CartState();
  const isAuthenticated = auth.user === true;
  // console.log(id,categoryid);
  const fetchBook = async () => {
    try {
      const res = await axios.get(
        `https://book-nest-backend.onrender.com/api/v1/search/book/${id}`
      );
      setBook(res.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const fetchRelatedBook = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/similarbook/${id}/${categoryid}`
      );
      setRelatedBook(res.data);
      console.log("relatedBook", res.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: book });
  };
  useEffect(() => {
    fetchBook();
    fetchRelatedBook();
  }, [id, categoryid]);

  // console.log("book", book);
  useEffect(() => {
    const fetchData = async () => {
      if (auth.user) {
        try {
          // Fetch interested books based on user interests
          const interestedBooksResponse = await axios.get(
            `http://localhost:5000/api/v1/interestedbooks`
          );
          setInterestedBooks(interestedBooksResponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated]);

  console.log("interestedBooks", interestedBooks);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="single__book">
            <div className="row book__item d-flex align-items-center px-md-5">
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center align-items-center content">
                  <div className="book__image">
                    <img src={book.photo} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className=" content book__details text-md-left text-center">
                  <p className="book-title"> {book.title}</p>
                  <p className="text-white my-2 book-description">
                    {book.description}
                  </p>
                  <p className="mt-2">
                    <span className="small-desc">
                      Category :
                      <span className="small-desc-tag">
                        {book?.category?.name}
                      </span>
                    </span>
                    , &nbsp;
                    <span className="small-desc">
                      Publication :
                      <span className="small-desc-tag">
                        {book?.publication?.name}
                      </span>
                    </span>
                  </p>
                  <p className="small-desc">
                    Author :
                    <span className="small-desc-tag">{book?.author?.name}</span>
                  </p>

                  <p className="book-price">Taka : {book.price}</p>
                  <button className="buy-btn" onClick={handleAddToCart}>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4 my-4">
        {interestedBooks.length > 0 &&<h1 className="my-5">Books you may like</h1>}
        {interestedBooks.length > 0
          ? interestedBooks.map((book) => (
              <div className="col-6 col-md-3 my-4">
                <BookCard book={book} category={book?.category} />
              </div>
            ))
          : ""}
      </div>
      <div className="row py-4 mt-4">
      {relatedBook.length > 0 &&<h1 className="my-5">Related books</h1>}
        {relatedBook.length > 0 &&
          relatedBook.map((book) => (
            <div className="col-6 col-md-3">
              <BookCard book={book} category={book.category} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Book;
