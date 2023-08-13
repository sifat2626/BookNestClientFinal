import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./FilterOption.css";

const FilterOption = ({
  selectedCategory,
  setSelectedCategory,
  selectedPublication,
  setSelectedPublication,
  selectedAuthor,
  setSelectedAuthor,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://book-nest-backend.onrender.com/api/v1/categories"
        );
        const data = response.data;
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch authors from the API
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          "https://book-nest-backend.onrender.com/api/v1/writers"
        );
        const data = response.data;
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    // Fetch publications from the API
    const fetchPublications = async () => {
      try {
        const response = await axios.get(
          "https://book-nest-backend.onrender.com/api/v1/publications"
        );
        const data = response.data;
        setPublications(data);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    // Fetch data
    fetchCategories();
    fetchAuthors();
    fetchPublications();
  }, []);

  return (
    <Fragment>
      {/* Category */}
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-1"
            role="button"
            aria-expanded="true"
            aria-controls="widget-1"
          >
            Category
          </a>
        </h3>
        <div className="collapse show" id="widget-1">
          <div className="widget-body">
            <div className="filter-items filter-items-count">
              {/* Categories */}
              {categories.map((category) => (
                <div className="form-check" key={category._id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    checked={selectedCategory === category.name}
                    id={category._id}
                    onChange={() => setSelectedCategory(category.name)}
                  />
                  <label className="form-check-label" htmlFor={category._id}>
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Publication */}
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-2"
            role="button"
            aria-expanded="true"
            aria-controls="widget-2"
          >
            Publication
          </a>
        </h3>
        <div className="collapse show" id="widget-2">
          <div className="widget-body">
            <div className="filter-items filter-items-count">
              {/* Publications */}
              {publications.map((publication) => (

                      <div className="form-check" key={publication._id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        id={publication._id}
                        checked={selectedPublication === publication.name}
                        name="publication"
                        onChange={() => setSelectedPublication(publication.name)}
                      />
                      <label className="form-check-label" htmlFor={publication._id}>
                        {publication.name}
                      </label>
                    </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="widget">
        <h3 className="widget-title">Price Range</h3>
        <div className="widget-body">
          <div className="filter-items">
            <div className="filter-item">
              <label htmlFor="min-price">Min Price:</label>
              <input
                type="number"
                id="min-price"
                className="form-control"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="filter-item">
              <label htmlFor="max-price">Max Price:</label>
              <input
                type="number"
                id="max-price"
                className="form-control"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Author */}
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-3"
            role="button"
            aria-expanded="true"
            aria-controls="widget-3"
          >
            Author
          </a>
        </h3>
        <div className="collapse show" id="widget-3">
          <div className="widget-body">
            <div className="filter-items filter-items-count">
              {/* Authors */}
              {authors.map((author) => (

                <div className="form-check" key={author._id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        id={author._id}
                      checked={selectedAuthor === author.name}
                      name="author"
                      onChange={() => setSelectedAuthor(author.name)}
                      />
                      <label className="form-check-label" htmlFor={author._id}>
                        {author.name}
                      </label>
                    </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterOption;
