import React, { Fragment, useState } from "react";
import FilterPanel from "./FilterOption.jsx";
import ProductPanel from "./ProductPanel";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
 
  return (
    <Fragment>
      <div className="page-content mt-4">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3 col-4 order-lg-first">
              <FilterPanel
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedPublication={selectedPublication}
                setSelectedPublication={setSelectedPublication}
                selectedAuthor={selectedAuthor}
                setSelectedAuthor={setSelectedAuthor}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />
            </aside>
            <div className="col-lg-9 col-8">
              <ProductPanel
                selectedCategory={selectedCategory}
                selectedPublication={selectedPublication}
                selectedAuthor={selectedAuthor}
                minPrice={minPrice}
                maxPrice={maxPrice}
                sort={sort}
                setSort={setSort}
              />
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
