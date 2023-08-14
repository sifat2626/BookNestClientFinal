import React, { useEffect, useState } from "react";
import axios from "axios";
import ReusableAuthor from "../../components/author/ReusableAuthor.jsx";
import { useParams } from "react-router-dom"; // Import the useParams hook

const AuthorById = () => {
	const { id } = useParams(); // Get the id parameter from the URL

	const [authorData, setAuthorData] = useState({});
	const [authorBooks, setAuthorBooks] = useState([]);

	useEffect(() => {
		// Fetch author data
		const fetchAuthorData = async () => {
			try {
				const response = await axios.get(
					`https://book-nest-backend.onrender.com/api/v1/writers/${id}`
				);

				setAuthorData(response.data);
				setAuthorBooks(response.data.books); // Assuming the API returns books data for the author
			} catch (error) {
				console.error("Error fetching author data:", error);
			}
		};

		fetchAuthorData();
	}, [id]);

	return (
		<div className="author-by-id">
			<ReusableAuthor
				photoSrc={authorData.photo}
				title={authorData.name}
				description={authorData.biography}
				books={authorBooks}
				type="author"
				id={id}
			/>
		</div>
	);
};

export default AuthorById;
