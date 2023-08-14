import { Fragment, Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/loader/Loader";
// import { SearchState } from "./context/SearchContext.jsx";
import DefaultLayout from "./layout/admin/DefaultLayout";
import {BrowserRouter, Route, Routes, Navigate, useParams} from "react-router-dom";
import NavbarPrev from "./layout/client/Navbar-prev.jsx";
import Footer from "./components/footer/Footer.jsx";
import ProductListByCategory from "./components/category/ProductListByCategory.jsx";
const UserOrder = lazy(() => import("./components/user/UserOrder"));
const Wishlist = lazy(() => import("./pages/client/WishList"));
const Cart = lazy(() => import("./pages/client/Cart"));
const Contact = lazy(() => import("./pages/client/Contact"));

const Login = lazy(() => import("./pages/auth/Login.jsx"));
const Register = lazy(() => import("./pages/auth/Register.jsx"));
import { Toaster, toast } from "react-hot-toast";
import AuthorById from "./pages/client/AuthorById.jsx";

const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword.jsx"));
// const name = lazy(() => import("link"));
//client
const Home = lazy(() => import("./pages/client/HomePage.jsx"));
const UserProfile = lazy(() => import("./components/user/UserProfile.jsx"));
const Book = lazy(() => import("./pages/client/Book.jsx"));
const Books = lazy(() => import("./pages/client/Books.jsx"));
const ShopPage = lazy(() => import("./pages/client/shop/ShopPage.jsx"));
const Blog = lazy(() => import("./pages/client/Blog.jsx"));
// import ShopPage from "./pages/client/shop/ShopPage.jsx";
// import AuthorListing from "./pages/client/AutorListing";
const AuthorListing = lazy(() => import("./pages/client/AutorListing.jsx"));
// const AuthorListing = lazy(() =>("./pages/client/AuthorListing.jsx"));
const SuccessOrder = lazy(() => import("./pages/client/SuccessOrder.jsx"));
const FailedOrder = lazy(() => import("./pages/client/FailedOrder.jsx"));
const About = lazy(() => import("./pages/client/About.jsx"));
//admin
const OrderList = lazy(() => import("./components/admin/OrderList"));
const CreateAdmin = lazy(() => import("./components/admin/CreateAdmin"));
const CreateProduct = lazy(() => import("./components/admin/CreateProduct"));
const CreatePublisher = lazy(() =>
  import("./components/admin/CreatePublisher")
);
const CreateAuthor = lazy(() => import("./components/admin/CreateAuthor"));
const CreateCategory = lazy(() => import("./components/admin/CreateCategory"));

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);



  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <BrowserRouter>
        <NavbarPrev />
        <Toaster position="top-center" />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/book/:id/:categoryid"
            element={
              <Suspense fallback={<Loader />}>
                <Book />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<Loader />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/books"
            element={
              <Suspense fallback={<Loader />}>
                <Books />
              </Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <Suspense fallback={<Loader />}>
                <ShopPage />
              </Suspense>
            }
          />
          <Route
            path="/authors"
            element={
              <Suspense fallback={<Loader />}>
                <AuthorListing />
                {/*<AuthorDetailsCard />*/}
              </Suspense>
            }
          />
          <Route
            path="/author/:id"
            element={
              <Suspense fallback={<Loader />}>
                <AuthorById authorId={useParams().id}/>
                {/*<AuthorDetailsCard />*/}
              </Suspense>
            }
          />

          <Route
            path="/success"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute>
                  <SuccessOrder />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/failed"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute>
                  <FailedOrder />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute path="/cart">
                  <Cart />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/wishlist"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute path="/wishlist">
                  <Wishlist />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute path="/about">
                  <About />
                </ProtectedRoute>
              </Suspense>
            }
          />
          {/*changed by sifat*/}
          <Route
            path="/user/orders"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute path="/user/orders">
                  <UserOrder />
                </ProtectedRoute>
              </Suspense>
            }
          />

          <Route
            path="/user/profile"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute path="/user/profile">
                  <UserProfile />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />
          
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/forgot"
            element={
              <Suspense fallback={<Loader />}>
                <ForgotPassword />
              </Suspense>
            }
          />
          {/*end of changing*/}
          <Route path="/testing" element={<AuthorListing />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

export function ProtectedRoute({ children, path }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    toast.error("Please login first");
    localStorage.setItem("intendedRoute", path);
    return <Navigate to="/login" />;
  }
}

export function AdminRoute({ children, path }) {
  const { user } = JSON.parse(localStorage.getItem("auth"));
  if (user?.role === 1) {
    return children;
  } else {
    toast.error("Only admin can access this page");
    return <Navigate to="/" />;
  }
}
