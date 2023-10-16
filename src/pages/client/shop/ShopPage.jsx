import React, { Fragment, useState } from "react";
import FilterPanel from "./FilterOption.jsx";
import ProductPanel from "./ProductPanel";
import Books from "../Books.jsx";
import { useFilterContext } from "../../../context/FilterProvider";

const ShopPage = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedPublication, setSelectedPublication] = useState(null);
  // const [selectedAuthor, setSelectedAuthor] = useState(null);
  // const [minPrice, setMinPrice] = useState("");
  // const [maxPrice, setMaxPrice] = useState("");
  // const [sort, setSort] = useState("");

  // console.log(selectedCategory,selectedPublication,selectedAuthor,minPrice,maxPrice);


 
  return (
    <Fragment>
      <div className="page-content mt-4">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3 col-4 order-lg-first">
              <FilterPanel/>
            </aside>
            <div className="col-lg-9 col-8">
              <Books
                // selectedCategory={selectedCategory}
                // selectedPublication={selectedPublication}
                // selectedAuthor={selectedAuthor}
                // minPrice={minPrice}
                // maxPrice={maxPrice}
                // sort={sort}
                // setSort={setSort}
              />
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
