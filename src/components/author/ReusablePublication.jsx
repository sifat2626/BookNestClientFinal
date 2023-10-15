import React from "react";
import BookCard from "../../components/category/BookCard.jsx"; // Make sure to adjust the import path

const ReusablePublication = ({ photoSrc, name, books }) => {
  return (
    <div className="container py-5" style={{ height: "200vh" }}>
      <div className="reusable-author py-4">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="photo py-4">
            <img src={photoSrc} alt="Author" />
          </div>
          <div className="title py-3">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="book-list row py-5">
          {books.map((book) => (
            <div key={book.id} className="col-md-3 py-3 my-3">
              <BookCard book={book} category={book.category._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusablePublication;
