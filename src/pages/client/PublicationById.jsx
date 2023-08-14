import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import ReusablePublication from "../../components/author/ReusablePublication.jsx";


const PublicationById = () => {
	const { id } = useParams(); // Get the id parameter from the URL

	const [authorData, setAuthorData] = useState({});
	const [authorBooks, setAuthorBooks] = useState([]);

	useEffect(() => {
		// Fetch author data
		const fetchAuthorData = async () => {
			try {
				const response = await axios.get(
					`https://book-nest-backend.onrender.com/api/v1/publications/${id}`
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
			<ReusablePublication
				photoSrc={authorData.photo}
				name={authorData.name}
				// description={authorData.biography}
				books={authorBooks}
				type="publication"
				id={id}
			/>
		</div>
	);
};

export default PublicationById;
