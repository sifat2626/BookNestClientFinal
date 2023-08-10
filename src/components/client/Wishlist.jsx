import React from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const Wishlist = ({ wishlist, wishdispatch }) => {
  const { dispatch } = CartState();
  const navigate = useNavigate();

  return (
    <tr>
      <td className="product_remove">
        <a
          onClick={() =>
            wishdispatch({ type: "ADD_TO_WISHLIST", payload: wishlist })
          }
        >
          <FaTrashAlt />
        </a>
      </td>
      <td className="product_thumb">
        <p
          onClick={() =>
            navigate(`/book/${wishlist._id}/${wishlist.category[0]._id}`)
          }
        >
          <img className="mx-auto" src={wishlist.photo} alt="book image" />
        </p>
      </td>
      <td className="product_name d-none d-md-table-cell">
        <div onClick={()=>navigate(`/book/${wishlist._id}/${wishlist.category[0]._id}`)}>
          <a className="product_name-data">{wishlist.title}</a>
        </div>
      </td>
      <td className="product_price d-none d-md-table-cell">
        ৳ {wishlist.price}
      </td>
      <td>{wishlist.stock > 0 ? "In Stock" : "Out Of Stock"}</td>
      <td>
        <a
          role="button"
          className="btn-cart"
          data-id={451}
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: wishlist })}
        >
          Add To Cart
        </a>
      </td>
    </tr>
  );
};

export default Wishlist;
