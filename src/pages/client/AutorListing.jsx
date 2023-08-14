import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import AuthorCard from '../../components/author/AuthorCard';

const AuthorListing = () => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('https://book-nest-backend.onrender.com/api/v1/writers');
      setAuthors(response.data);
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
            {authors?.map((author) => (
              <div key={author._id} className="col-6 col-md-4 col-lg-3 mb-4">
                <AuthorCard author={author} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthorListing;
