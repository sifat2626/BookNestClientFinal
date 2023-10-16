import React, { Fragment } from 'react'
import BlogCard from '../../components/client/BlogCard'

const Blog = () => {
    return (
        <Fragment>
            <div class="page-content pt-4 mt-4">
                <div class="container">
                    <div class="row">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Blog
