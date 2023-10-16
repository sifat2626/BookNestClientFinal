import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../../components/category/BookCard.jsx"; // Make sure to adjust the import path

const ReusableAuthor = ({ photoSrc, title, description, books, type, id }) => {
  const [authorName, setAuthorName] = useState("");
  const [authorBooks, setAuthorBooks] = useState([]);

  useEffect(() => {
    // Fetch author's name using the provided API
    const fetchAuthorName = async () => {
      try {
        const response = await axios.get(
          `https://book-nest-backend.onrender.com/api/v1/writers/${id}`
        );
        setAuthorName(response.data.name);
      } catch (error) {
        console.error("Error fetching author name:", error);
      }
    };

    fetchAuthorName();
  }, [id]);

  useEffect(() => {
    // Fetch books by author name using the provided API
    const fetchAuthorBooks = async () => {
      try {
        const response = await axios.get(
          `https://book-nest-backend.onrender.com/api/v1/search/author/${authorName}`
        );
        setAuthorBooks(response.data);
      } catch (error) {
        console.error("Error fetching author books:", error);
      }
    };

    fetchAuthorBooks();
  }, [authorName]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-8 offset-2 d-flex justify-content-center py-4">
          <img
            width={100}
            height={100}
            src={photoSrc}
            alt="Author"
            className="img-fluid"
          />
        </div>
        <div className="col-8 offset-2 d-flex flex-column justify-centent-center py-4 text-center">
          <div className="title py-3">
            <h2>{authorName}</h2>
          </div>
          <div className="description py-3">
            <p>{description}</p>
          </div>
        </div>

        <div className="container">
          {authorBooks && authorBooks.length > 0 && (
            <div className="row py-5">
              {authorBooks.map((book) => (
                <div key={book.id} className="col-6 col-md-3 py-3 my-3">
                  <BookCard book={book} category={book.category._id} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReusableAuthor;
