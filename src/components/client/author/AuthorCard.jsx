import React, { Fragment } from 'react'
import img from '../../../assets/client/images/product-8.jpg'
import { Link } from 'react-router-dom'

const AuthorCard = ({author}) => {
    return (
        <Fragment>
            <Link to='bookList/fklsdjjalkjalkjalkaladdkl' class="col-6 col-md-4 col-lg-4 col-xl-3">
                <div class="feed">
                    <img src={author.photo} alt={author.name}/>
                        <div class="feed-content">
                            <h5 href="#">{author.name}</h5>
                            <p className='lead text-white'>{author.biography}</p>
                        </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default AuthorCard
