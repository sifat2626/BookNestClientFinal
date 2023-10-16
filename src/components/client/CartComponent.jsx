import React from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../context/CartContext";
import { FaTrashAlt,FaPlus,FaMinus } from "react-icons/fa";

const CartComponent = ({book}) => {
  const { dispatch } = CartState();
  const navigate = useNavigate();
  const increaseItem = () => {
    dispatch({
      type: "INCREASE_CART_QTY",
      payload: book,
    });
  };
  const decreaseItem = () => {
    dispatch({
      type: "DECREASE_CART_QTY",
      payload: book,
    });
  };
  return (
    <><tr>
    <td className="product_remove">
    <a onClick={()=>dispatch({
      type: "REMOVE_FROM_CART",
      payload: book,
    })}>
    <FaTrashAlt />
  </a>
    </td>
    <td className="product_thumb ">
        <a onClick={() =>
          navigate(`/book/${book._id}/${book.category[0]._id}`)
        }><img src={book.photo} alt={book.title} className="mx-auto" /></a>
    </td>
    <td className="product_name d-none d-md-table-cell">
        <a className="product_name-data" onClick={() =>
          navigate(`/book/${book._id}/${book.category[0]._id}`)
        }>
            {book.title}</a>
    </td>
    <td className="product_price d-none d-md-table-cell">
        ৳ {book.price}
    </td>
    <td><span onClick={decreaseItem}><FaMinus/></span> <span className="px-2">{book.qty}</span> <span onClick={increaseItem}><FaPlus/></span></td>
    <td>৳ {book.price * book.qty}</td>
</tr></>
  )
}

export default CartComponent