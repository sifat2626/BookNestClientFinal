export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.wishlist.some((item) => item._id === action.payload._id)) {
        
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      } else {
       
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      }
    case "SET_WISHLIST":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};