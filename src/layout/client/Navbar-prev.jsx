import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import CartItem from "../../components/client/CartItem";
import { CartState } from "../../context/CartContext";
import { SearchState } from "../../context/SearchContext";
import { useWishlist } from "../../context/WishListContext";
import { useAuth } from "../../context/auth";
import "./../../assets/css/skin-color.css";
import "./../../assets/css/style1.css";

const NavbarPrev = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from the API
    fetch("https://book-nest-backend.onrender.com/api/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of category objects
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const location = useLocation();
  // console.log('location', location);
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
      const response = await axios.get(
        "https://book-nest-backend.onrender.com/api/v1/writers"
      );
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
                      className={
                        isInputDisabled
                          ? "disabled-input form-control"
                          : "form-control"
                      }
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
                <Link
                  to="/books"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Browse Categories"
                >
                  Browse Categories <i className="bx bx-chevron-down"></i>
                </Link>

                <div className="dropdown-menu">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                      
                      {categories.map((category, i) => (
                        <li className="item-lead" key={i}>
                          <NavLink to={`/books?category=${category.name}`}>
                            {category.name}
                          </NavLink>
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
                    <NavLink to="/" className=" nb">
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
          </div>

          <ul className="mobileMenu navbar-nav justify-content-end flex-grow-1 pe-3 fw-semibold ml-4 fs-4">
            <li className="nav-item border-bottom py-2">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item border-bottom py-2">
              <NavLink className="nav-link" to="/authors">
                Author
              </NavLink>
            </li>

            <li className="nav-item border-bottom py-2">
              <NavLink className="nav-link" to="/publications">
                Publisher
              </NavLink>
            </li>
            <li className="nav-item border-bottom py-2">
              <NavLink className="nav-link" to="/books">
                Books
              </NavLink>
            </li>
            <li className="nav-item border-bottom py-2">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item border-bottom py-2">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item border-bottom py-2">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
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
