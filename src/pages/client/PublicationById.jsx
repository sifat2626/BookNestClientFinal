import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useParams } from "react-router-dom";
import ReusablePublication from "../../components/author/ReusablePublication.jsx";


const PublicationById = () => {
	const { id } = useParams(); // Get the id parameter from the URL
	const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get("name");
	

	const [publicationData, setPublicationData] = useState({});
	const [publicationsBook, setPublicationsBook] = useState([]);

	useEffect(() => {
		// Fetch Publication data
		const fetchPublicationData = async () => {
			try {
				const response = await axios.get(
					`https://book-nest-backend.onrender.com/api/v1/publications/${id}`
				);

				setPublicationData(response.data);
			} catch (error) {
				console.error("Error fetching Publication data:", error);
			}
		};
		// Fetch books data
		const fetchPublicationBooksData = async () => {
			try {
				const response = await axios.get(
					`https://book-nest-backend.onrender.com/api/v1/search/publication/${paramValue}`
				);

				// setAuthorData(response.data);
				setPublicationsBook(response.data);
				console.log('response.data', response.data);
				
			} catch (error) {
				console.error("Error fetching author data:", error);
			}
		};
		fetchPublicationData();
		fetchPublicationBooksData();
	}, [paramValue,id]);

	return (
		<div className="author-by-id">

			 {/*
				<ReusablePublication
	 				photoSrc={publicationData.photo}
	 				name={publicationData.name}
	 				// description={authorData.biography}
	 				books={authorBooks}
	 				type="publication"
	 				id={id}
	 			/>  
			 */}

			 {publicationData && publicationsBook&& 
				<ReusablePublication
				photoSrc={publicationData.photo}
				name={publicationData.name}
				books={publicationsBook}
			/>  }
			
		</div>
	);
};

export default PublicationById;
