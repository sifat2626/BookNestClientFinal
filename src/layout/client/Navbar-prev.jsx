import axios from "axios";
import "./../../assets/css/style1.css";
import "./../../assets/css/skin-color.css";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import CartItem from "../../components/client/CartItem";
import { CartState } from "../../context/CartContext";
import { SearchState } from "../../context/SearchContext";
import { useWishlist } from "../../context/WishListContext";
import { useAuth } from "../../context/auth";

const NavbarPrev = () => {

  const [categories,setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from the API
    fetch('https://book-nest-backend.onrender.com/api/v1/categories')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response is an array of category objects
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);


  const location = useLocation();
  console.log('location', location);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [previousLocation, setPreviousLocation] = useState(location);
  const [authors, setAuthors] = useState([]);
  const [publications, setPublications] = useState([]);
  const [auth] = useAuth();
  const user = auth?.user || {};
  const userName = user?.name || "";
  const { state, dispatch } = CartState();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const { search, setSearch } = SearchState();
  const allowedPaths = ["/", "/books"];
  // get total price
  let total;
  if (state.cart.length > 0) {
    total = state.cart.reduce(
      (total, book) => total + book.price * book.qty,
      0
    );
  } else {
    total = 0;
  }
  const fetchAuthors = async () => {
    try {
      const response = await axios.get("https://book-nest-backend.onrender.com/api/v1/writers");
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error.message);
    }
  };
  const fetchPublication = async () => {
    try {
      const response = await axios.get(
        "https://book-nest-backend.onrender.com/api/v1/publications"
      );
      setPublications(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error.message);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("intendedRoute");
    navigate("/login");
    window.location.reload();
    // window.location.replace("/");
  };
  useEffect(() => {
    fetchAuthors();
    fetchPublication();
  }, []);
  // console.log('auth', auth);
  // managing the search Context

  useEffect(() => {
    if (location !== previousLocation) {
      setSearch("");
      setPreviousLocation(location);
    }
  }, [location, previousLocation, setSearch]);
  //  console.log('location', location);
  // console.log("search", search);
  // console.log('truefalse', search==='');
  useEffect(() => {
    setIsInputDisabled(!allowedPaths.includes(location.pathname));
  }, [location]);
  return (
    <div className="">
      <header className="header header-intro-clearance header-4 shadow-sm">
        <div className="header-top">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="">
              <a href="src/layout/client/Navbar-prev.jsx#">
                <span>
                  <i className="bx bxs-phone-call"></i>
                </span>
                Call: +01736 000 000
              </a>
            </div>

            <div className="">
              {auth.user !== null ? (
                <ul className=" mb-0">
                  <li>
                    <ul>
                      <li>
                        <div className="header-dropdown">
                          <span
                            className="btn btn-link fs-3 fw-semibold text-dark"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="me-2">{userName}</span>
                            <span className=" text-white px-2">
                              {auth.user.photo !== "" ? (
                                <img
                                  src={auth.user.photo}
                                  alt="user"
                                  className="rounded-circle"
                                  style={{
                                    objectFit: "cover",
                                    width: "30px",
                                    height: "30px",
                                  }}
                                />
                              ) : (
                                <span
                                  className="rounded-circle bg-primary"
                                  style={{
                                    display: "block",
                                    padding: "8px",
                                  }}
                                >
                                  {auth.user.name[0].toUpperCase()}
                                </span>
                              )}
                            </span>
                          </span>
                          <div className="header-menu">
                            <ul>
                              <li>
                                <Link to="/user/profile">User Dashboard</Link>
                              </li>
                              <li>
                                <Link onClick={handleLogout}>Logout</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                <ul className=" mb-0">
                  <li>
                    <ul>
                      <li>
                        <div className="header-dropdown">
                          <Link to="/login" className="fs-3 fw-semibold">
                            Login
                          </Link>
                          <div className="header-menu">
                            <ul>
                              <li>
                                <Link to="/register">Register</Link>
                              </li>
                              <li>
                                <Link to="/login">Login</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <Link to="/" className="logo">
                <h2 className="text-primary display-4 fw-medium">BookNest</h2>
              </Link>
            </div>

            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <a className="search-toggle" role="button">
                  <i className="bx bx-search-alt-2"></i>
                </a>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label for="q" className="sr-only">
                      Search
                    </label>
                    <button
                      className="btn btn-primary text-center pt-2"
                      type="submit"
                    >
                      <i className="bx bx-search-alt-2"></i>
                    </button>
                    <input
                      disabled={isInputDisabled}
                      className={isInputDisabled ? "disabled-input form-control" : "form-control"}
                      type="search"
                     
                      placeholder="Search ..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="header-right">
              <div className="wishlist">
                <Link to="/wishlist" title="Wishlist">
                  <div className="icon">
                    <i className="bx bxs-heart"></i>
                    <span className="wishlist-count badge ">
                      {wishlistState.wishlist.length}
                    </span>
                  </div>
                  <p>Wishlist</p>
                </Link>
              </div>

              <div className="dropdown cart-dropdown">
                <a
                  onClick={() => navigate("/cart")}
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <i className="bx bxs-cart-alt"></i>
                    <span className="cart-count">{state.cart.length}</span>
                  </div>
                  <p>Cart</p>
                </a>
                {localStorage.getItem("auth") ? (
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                      {state.cart.length > 0 ? (
                        state.cart.map((item) => (
                          <CartItem key={item._id} book={item} />
                        ))
                      ) : (
                        <h3 className="text-center">Cart is Empty</h3>
                      )}
                    </div>

                    <div className="dropdown-cart-total">
                      <span>Total</span>

                      <span className="cart-total-price">tk {total}</span>
                    </div>

                    <div className="dropdown-cart-action">
                      <Link className="btn btn-primary" to="/cart">
                        View Cart
                      </Link>
                      <a
                        href="checkout.html"
                        className="btn btn-outline-primary-2"
                      >
                        <span>Checkout</span>
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <button
                className="navbar-toggler fs-1 border border-warning ml-5 d-block d-lg-none text-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <i className="bx bx-menu"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <div className="dropdown category-dropdown">
                <a
                  href="src/layout/client/Navbar-prev.jsx#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Browse Categories"
                >
                  Browse Categories <i className="bx bx-chevron-down"></i>
                </a>

                <div className="dropdown-menu">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                      {/*<li className="item-lead">*/}
                      {/*  <a href="src/layout/client/Navbar-prev.jsx#">*/}
                      {/*    Daily offers*/}
                      {/*  </a>*/}
                      {/*</li>*/}
                      {categories.map((category,i)=>(
                        <li className="item-lead" key={i}>
                          <a href="src/layout/client/Navbar-prev.jsx#">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container">
                    <NavLink to="/shop" className=" nb">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/authors" className="nb">
                      Author
                    </NavLink>

                    <div className="megamenu megamenu-sm">
                      <div className="row no-gutters">
                        <div className="col-md-12">
                          <div className="menu-col">
                            <ul>
                              {authors?.map((author, index) => (
                                <li key={index}>
                                  <NavLink to={`/author/${author._id}`}>
                                    {author.name}
                                  </NavLink>
                                </li>
                              ))}
                              <li>
                                <NavLink to="/authors" className="see__more">
                                  see more..
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="/publications" className="nb">
                      Publications
                    </NavLink>

                    <div className="megamenu megamenu-sm">
                      <div className="row no-gutters">
                        <div className="col-md-12">
                          <div className="menu-col">
                            {/*
														 <div className="menu-title">Product Details</div> 
														*/}

                            <ul>
                              {publications?.map((publication, index) => (
                                <li key={index}>
                                  <NavLink
                                    to={`/publication/${publication._id}`}
                                  >
                                    {publication.name}
                                  </NavLink>
                                </li>
                              ))}
                              <li>
                                <NavLink
                                  to="/publications"
                                  className="see__more"
                                >
                                  see more..
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/books" className="nb">
                      Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" className="nb">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="nb">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="nb">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="mobile-menu-overlay"></div>

          <div className="mobile-menu-container mobile-menu-light">
            <div className="mobile-menu-wrapper">
              <span className="mobile-menu-close">
                <i className="icon-close"></i>
              </span>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mobile-search"
              >
                <label for="mobile-search" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  className="form-control"
                  name="mobile-search"
                  id="mobile-search"
                  placeholder="Search.."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  <i className="icon-search"></i>
                </button>
              </form>

              <ul
                className="nav nav-pills-mobile nav-border-anim"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="mobile-menu-link"
                    data-toggle="tab"
                    href="src/layout/client/Navbar-prev.jsx#mobile-menu-tab"
                    role="tab"
                    aria-controls="mobile-menu-tab"
                    aria-selected="true"
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="mobile-cats-link"
                    data-toggle="tab"
                    href="src/layout/client/Navbar-prev.jsx#mobile-cats-tab"
                    role="tab"
                    aria-controls="mobile-cats-tab"
                    aria-selected="false"
                  >
                    Categories
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="mobile-menu-tab"
                  role="tabpanel"
                  aria-labelledby="mobile-menu-link"
                >
                  <nav className="mobile-nav">
                    <ul className="mobile-menu">
                      <li className="active">
                        <a href="../../../index.html">Home</a>
                      </li>
                      <li>
                        <a href="category.html">
                          Author <span className="mmenu-btn"></span>
                        </a>
                        <ul>
                          <li>
                            <a href="category-list.html">Shop List</a>
                          </li>
                          <li>
                            <a href="category-2cols.html">
                              Shop Grid 2 Columns
                            </a>
                          </li>
                          <li>
                            <a href="category.html">Shop Grid 3 Columns</a>
                          </li>
                          <li>
                            <a href="category-4cols.html">
                              Shop Grid 4 Columns
                            </a>
                          </li>
                          <li>
                            <a href="category-boxed.html">
                              <span>
                                Shop Boxed No Sidebar
                                <span className="tip tip-hot">Hot</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="category-fullwidth.html">
                              Shop Fullwidth No Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-category-boxed.html">
                              Product Category Boxed
                            </a>
                          </li>
                          <li>
                            <a href="product-category-fullwidth.html">
                              <span>
                                Product Category Fullwidth
                                <span className="tip tip-new">New</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <Link to="/cart">Cart</Link>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <Link to="/wishlist">Wishlist</Link>
                          </li>
                          <li>
                            <a href="src/layout/client/Navbar-prev.jsx#">
                              Lookbook
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="product.html" className="">
                          Publisher <span className="mmenu-btn"></span>
                        </a>
                        <ul>
                          <li>
                            <a href="product.html">Default</a>
                          </li>
                          <li>
                            <a href="product-centered.html">Centered</a>
                          </li>
                          <li>
                            <a href="product-extended.html">
                              <span>
                                Extended Info
                                <span className="tip tip-new">New</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="product-gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="product-sticky.html">Sticky Info</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html">
                              Boxed With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-fullwidth.html">Full Width</a>
                          </li>
                          <li>
                            <a href="product-masonry.html">
                              Masonry Sticky Info
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">Books</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="elements-list.html">About</a>
                      </li>
                      <li>
                        <a href="elements-list.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="tab-pane fade"
                  id="mobile-cats-tab"
                  role="tabpanel"
                  aria-labelledby="mobile-cats-link"
                >
                  <nav className="mobile-cats-nav">
                    <ul className="mobile-cats-menu">
                      <li>
                        <a
                          className="mobile-cats-lead"
                          href="src/layout/client/Navbar-prev.jsx#"
                        >
                          Daily offers
                        </a>
                      </li>
                      <li>
                        <a
                          className="mobile-cats-lead"
                          href="src/layout/client/Navbar-prev.jsx#"
                        >
                          Gift Ideas
                        </a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">Beds</a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">
                          Lighting
                        </a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">
                          Sofas & Sleeper sofas
                        </a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">Storage</a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">
                          Armchairs & Chaises
                        </a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">
                          Decoration{" "}
                        </a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">
                          Kitchen Cabinets
                        </a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">
                          Coffee & Tables
                        </a>
                      </li>
                      <li>
                        <a href="src/layout/client/Navbar-prev.jsx#">
                          Outdoor Furniture{" "}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="social-icons">
                <a
                  href="src/layout/client/Navbar-prev.jsx#"
                  className="social-icon"
                  target="_blank"
                  title="Facebook"
                >
                  <i className="icon-facebook-f"></i>
                </a>
                <a
                  href="src/layout/client/Navbar-prev.jsx#"
                  className="social-icon"
                  target="_blank"
                  title="Twitter"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="src/layout/client/Navbar-prev.jsx#"
                  className="social-icon"
                  target="_blank"
                  title="Instagram"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="src/layout/client/Navbar-prev.jsx#"
                  className="social-icon"
                  target="_blank"
                  title="Youtube"
                >
                  <i className="icon-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* responsive */}
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header d-flex justify-content-between">
          <p className="fw-bold fs-1 text-primary">BookNest</p>
          <button
            type="button"
            className="btn-close border border-2 border-warning text-warning"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className=" mt-2 w-75 mx-auto ">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="header-search-wrapper search-wrapper-wide position-relative">
                <label for="q" className="sr-only">
                  Search
                </label>

                <input
                  type="search"
                  className="form-control"
                  placeholder="Search product ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="position-absolute px-5 py-2 border  border-0 bg-primary fs-2 text-white top-0 end-0"
                  type="submit"
                >
                  <i className="bx bx-search-alt-2"></i>
                </button>
              </div>
            </form>
          </div>

          <ul className="mobileMenu navbar-nav justify-content-end flex-grow-1 pe-3 fw-semibold ml-4 fs-4">
            <li className="nav-item border-bottom py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="src/layout/client/Navbar-prev.jsx#"
              >
                Home
              </a>
            </li>
            <li className="nav-item border-bottom py-2">
              <a className="nav-link" href="src/layout/client/Navbar-prev.jsx#">
                Author
              </a>
            </li>

            <li className="nav-item border-bottom py-2">
              <a className="nav-link" href="src/layout/client/Navbar-prev.jsx#">
                Publisher
              </a>
            </li>
            <li className="nav-item border-bottom py-2">
              <a className="nav-link" href="src/layout/client/Navbar-prev.jsx#">
                Books
              </a>
            </li>
            <li className="nav-item border-bottom py-2">
              <a className="nav-link" href="src/layout/client/Navbar-prev.jsx#">
                Blog
              </a>
            </li>
            <li className="nav-item border-bottom py-2">
              <a className="nav-link" href="src/layout/client/Navbar-prev.jsx#">
                About
              </a>
            </li>
            <li className="nav-item border-bottom py-2">
              <a className="nav-link" href="src/layout/client/Navbar-prev.jsx#">
                Contact
              </a>
            </li>
          </ul>

          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <p className="fs-3">
              <span className="mr-2 text-primary">
                <i className="bx bxs-envelope"></i>
              </span>
              booknest@gmail.com
            </p>
            <div className="fs-1 d-flex gap-3">
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-linkedin-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPrev;


