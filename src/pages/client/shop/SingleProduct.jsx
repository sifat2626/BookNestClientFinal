import React from 'react';

const SingleProduct = ({ title, author, photo, category, publication }) => {
    return (
      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
          <div className="product product-7 text-center">
              <figure className="product-media">
                  <a href="#">
                      <img src={photo} alt={title} className="product-image" />
                  </a>

                  <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                          <span>add to wishlist</span>
                      </a>
                      <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
                          <span>Quick view</span>
                      </a>
                      <a href="#" className="btn-product-icon btn-compare" title="Compare">
                          <span>Compare</span>
                      </a>
                  </div>

                  <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                      </a>
                  </div>
              </figure>

              <div className="product-body">
                  <div className="product-cat">
                      <a href="#">{category.name}</a>
                  </div>
                  <h3 className="product-title">
                      <a href="product.html">{title}</a>
                  </h3>
                  <div className="product-price">$76.00</div>
                  <div className="ratings-container">
                      <div className="ratings">
                          <div className="ratings-val" style={{ width: '20%' }}></div>
                      </div>
                      <span className="ratings-text">(2 Reviews)</span>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default SingleProduct;
