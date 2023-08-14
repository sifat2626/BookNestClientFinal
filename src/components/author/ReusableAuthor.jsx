import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../../components/category/BookCard.jsx"; // Make sure to adjust the import path

const ReusableAuthor = ({
	                        photoSrc,
	                        title,
	                        description,
	                        books,
	                        type,
	                        id,
                        }) => {
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
		<div className="container py-5" style={{ height: "200vh" }}>
			<div className="reusable-author py-4">
				<div className="photo py-4">
					<img src={photoSrc} alt="Author" />
				</div>
				<div className="title py-3">
					<h2>{authorName}</h2> {/* Display the fetched author name */}
				</div>
				<div className="description py-3">
					<p>{description}</p>
				</div>
				{authorBooks && authorBooks.length > 0 && (
					<div className="book-list row py-5">
						{authorBooks.map((book) => (
							<div key={book.id} className="col-md-3 py-3 my-3">
								<BookCard book={book} />
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ReusableAuthor;
