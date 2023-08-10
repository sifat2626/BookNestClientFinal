import "./bookCard.css";
import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishListContext.jsx";
import {useAuth} from "../../context/auth.jsx";
import axios from "axios";

const BookCard = ({ book, category }) => {
  // console.log('book',book);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { state, dispatch } = CartState();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const [userInterests, setUserInterests] = useState([]);
  const [interestedBooks, setInterestedBooks] = useState([]);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
// console.log('book', book);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: book });
  };
  const handleCardClick =async (event) => {
    if (!auth.user) {
      if (!event.target.classList.contains("adc")) {
        if(category._id===undefined){
          navigate(`/book/${book._id}/${book.category}`);}
          else {
          navigate(`/book/${book._id}/${category._id}`);
          }
      }
     
      
      return;
    }
    // event.stopPropagation();

    // Logic to update userInterests
    try {
      // Save interests to the backend
      const { data } = await axios.post('http://localhost:5000/api/v1/interests', {
        userEmail: auth.user?.email,
        interestId: book?.category._id
      });
      console.log('data', data);
      // Handle successful response if needed
    } catch (error) {
      console.error('Error updating interests:', error);
      // Handle the error appropriately, such as showing an error message to the user
    } finally {
      if (!event.target.classList.contains("adc")) {
        if(category._id===undefined){
        navigate(`/book/${book._id}/${book.category}`);}
        else {
        navigate(`/book/${book._id}/${category._id}`);
        }
      }
    }
    
  };

  

  const toggleWishlist = (event) => {
    event.stopPropagation();
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: book });
  };
  useEffect(() => {
    setIsInWishlist(wishlistState.wishlist?.some(item => item._id === book._id));
  }, [wishlistState.wishlist, book._id]);

// console.log('book',book);

  return (
    <div className="container mr-5">
      <div className="row">
        <div className="book-card" onClick={handleCardClick}>
          <img src={book.photo} alt />
          <div className="book-card__content">
            <div className="col-12 text-right">
              {isInWishlist ? (
                <i class="fa fa-heart" style={{color:"red"}} aria-hidden="true" onClick={toggleWishlist}></i>
              ) : (
                <i className="fa fa-heart-o"  onClick={toggleWishlist}></i>
              )}
            </div>
            <p className="book-card__title">{book.title}</p>
            <p className="book-card__description">
              {book?.description?.slice(0, 30)}..
            </p>
            <p className="book-card__price">Price: {book.price} taka</p>
            <div className="cart_button">
              <button
                type="button"
                className="button adc"
                onClick={handleAddToCart}
              >
                <span className="button__text">Add Item</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                    height="24"
                    fill="none"
                    class="svg"
                  >
                    <line y2="19" y1="5" x2="12" x1="12"></line>
                    <line y2="12" y1="12" x2="19" x1="5"></line>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

