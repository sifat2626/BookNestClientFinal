import React from 'react';
import { Link } from 'react-router-dom';

const AuthorCard = ({ author }) => {
  return (
    <div className="card shadow-sm d-flex flex-column" style={{height: '400px'} }>
      <img src={author.photo} alt="Author" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-center mt-3">{author.name}</h5>
          <p className="card-text biography mt-2 text-center" style={{ padding: '1em 0', maxHeight: '6em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            {author.biography}
          </p>
        </div>
        <Link to={`bookList/${author._id}`} className="btn btn-primary mt-3 align-self-center">
          View Books
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
