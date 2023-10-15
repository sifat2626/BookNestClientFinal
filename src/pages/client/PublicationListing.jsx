import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import PublicationCard from '../../components/author/PublicationCard';

const PublicationListing = () => {
	const [publications, setPublications] = useState([]);

	const fetchAuthors = async () => {
		try {
			const response = await axios.get('https://book-nest-backend.onrender.com/api/v1/publications');
			setPublications(response.data);
		} catch (error) {
			console.error('Error fetching authors:', error);
		}
	};

	useEffect(() => {
		fetchAuthors();
	}, []);

	return (
		<Fragment>
			<div className="page-content mt-4">
				<div className="container">
					<div className="row">
						{publications?.map((publication) => (
							<div key={publication._id} className="col-6 col-md-4 col-lg-3 mb-4">
								<PublicationCard publication={publication} />
							</div>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PublicationListing;
