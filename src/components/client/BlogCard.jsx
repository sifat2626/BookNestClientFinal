import React, { Fragment } from 'react'
import blog from "../../assets/client/images/post-6.jpg"

const BlogCard = () => {
    return (
        <Fragment>
            <div class="entry-item hobbies col-sm-6 col-lg-4">
                <article class="entry entry-grid text-center">
                    <figure class="entry-media">
                        <div>
                            <img src={blog} alt="image desc"/>
                        </div>
                    </figure>

                    <div class="entry-body">
                        <div class="entry-meta">
                            <span class="entry-author">
                                by <a href="#">Mahafuj Chaudhuree</a>
                            </span>
                            <span class="meta-separator">|</span>
                            <a href="#">Aug 10, 2023</a>
                        </div>

                        <h2 class="entry-title">
                            <a href="single.html">Blog Title</a>
                        </h2>

                        <div class="entry-content">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor earum dignissimos dicta velit necessitatibus, placeat assumenda neque quaerat ullam suscipit accusamus deserunt autem, unde illum saepe. Ipsa, nisi quisquam! ... </p>
                            <a href="single.html" class="read-more">Continue Reading</a>
                        </div>
                    </div>
                </article>
            </div>
        </Fragment>
    )
}

export default BlogCard