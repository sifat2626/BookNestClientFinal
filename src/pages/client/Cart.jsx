import React,{useState,useEffect} from "react";
import styled from "styled-components";
import CartComponent from "../../components/client/CartComponent";
import { CartState } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { state: cartState, dispatch: cartDispatch } = CartState();
  const [total,setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    
  const getTotal = () => {
    const res = cartState.cart?.reduce((prev, item) => {
      return prev + item.price * item.qty;
    }, 0);
    setTotal(res);
  };
 getTotal();
  }, [cartState])
  
  return (
    <Wrapper>
      <div className="cart_page d-flex justify-content-center">
        <div className="container">
          <div className="shopping_cart_area">
            <form action>
              <div className="row">
                <div className="col-12">
                  <div className="table_desc">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Delete</th>
                            <th className>Image</th>
                            <th className="d-none d-md-table-cell">Product</th>
                            <th className="d-none d-md-table-cell">Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartState.cart?.map((book) =>
                            book ? (
                              <CartComponent
                                key={book.id}
                                book={book}
                                cartdispatch={cartDispatch}
                              />
                            ) : (
                              <h1>Cart is empty</h1>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* cart payment section */}
              <div className="row d-flex justify-content-end">
                <div className="col-lg-6 col-md-6 offset-md-6">
                  <div className="coupon_code">
                    <h3>Cart Totals</h3>
                    <div className="coupon_inner">
                      <div className="cart_subtotal">
                        <p>Subtotal</p>
                        <p className="cart_amount">৳ {total}</p>
                      </div>
                      <div className="cart_subtotal ">
                        <p>Tax</p>
                        <p className="cart_amount">৳ {(total*.1).toFixed(2)}</p>
                      </div>
                      <div className="cart_subtotal">
                        <p>Total</p>
                        <p className="cart_amount">৳ {+total + Number((total*.1).toFixed(2))}</p>
                      </div>
                      <div className="cart__button-amount d-flex justify-content-between flex-column flex-md-row">
                        <div className="checkout_btn mb-md-0 mb-2" onClick={()=>navigate('/books')}>
                          <a
                            style={{
                              backgroundColor: "#000",
                              borderColor: "#000",
                            }}
                            
                          >
                            Continue Shopping
                          </a>
                        </div>
                        <div className="checkout_btn">
                          <a href="#">Proceed to Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  line-height: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #131921;
}

img {
  max-width: 100%;
  vertical-align: middle;
}

.cart_page {
  padding: 10px 0 75px;
  background: #f5f5f9;
}

.shopping_cart_area {
  background: #fff;
  padding: 20px;
  border: 1px solid #ebebeb;
}

.table_desc {
  border: 1px solid #ebebeb;
  margin-bottom: 60px;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}

.table-responsive table {
  border-collapse: collapse;
  border-spacing: 2px;
  border-color: gray !important;
  width: 100%;
  display: table;
}

.table_desc table thead {
  background: #ebebeb;
}

.table_desc table thead tr th {
  border-bottom: 3px solid #f4d078;
  border-right: 1px solid #ebebeb;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px;
  text-align: center;
}

.cart_page table thead tr:last-child th,
.table_desc table tbody tr td:last-child {
  border-right: 0;
}

.table_desc table tbody tr td {
  min-width: 180px;
  font-weight: 400;
  visibility: visible;
}

.table_desc table tbody tr td.product_remove {
  min-width: 100px;
}

.table_desc table tbody tr td.product_remove > a {
  font-size: 20px !important;
}

.table_desc table tbody tr td.product_remove > a {
  cursor: pointer;
}

.table_desc table tbody tr td {
  border-bottom: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  text-align: center;
  padding: 10px;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
}

.table_desc table tbody tr td.product_thumb {
  max-width: 180px;
}

.product_thumb {
  position: relative;
  padding: 10px;
}

.product_thumb img {
  width: 100px;
}

.product-price {
  min-width: 130px;
  color: #131921;
  font-size: 16px;
  font-weight: 500;
}

.product_name-data {
  color: #131921 !important;
  text-decoration: none;
  transition: all 0.4s ease 0s;
}

.product_name-data:hover {
  color: #f4d078 !important;
}

/* payment section */
.coupon_code {
  border: 1px solid #ebebeb;
}

.coupon_code h3 {
  color: #fff;
  line-height: 36px !important;
  padding: 5px 15px !important;
  background: #131921;
  text-transform: uppercase;
  font-size: 16px !important;
  font-weight: 500;
}

.coupon_inner {
  padding: 10px 20px 25px !important;
}

.cart_subtotal {
  display: flex;
  justify-content: space-between;
}

.cart_subtotal p {
  font-weight: 600;
  font-size: 14px !important;
}

.coupon_inner p {
  margin-bottom: 20px;
}

.cart_amount {
  font-size: 18px !important;
  font-weight: 500 !important;
}
.checkout_btn a {
  background: #f4d078;
  color: #fff;
  font-size: 15px;
  padding: 3px 14px;
  line-height: 30px;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  margin-bottom: 0;
  text-decoration: none;
  border-radius: 3px;
  text-align: center;
}
/* wishlist addition css */
.btn-cart {
  background: #f4d078;
  font-size: 12px;
  font-weight: 500;
  height: 38px;
  line-height: 18px;
  padding: 10px 20px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 3px;
  transition: all 0.4s ease 0s;
}
.btn-cart:hover {
  background: #131921;
  text-decoration: none;
  color:#fff;
}
/* media query */
/* Styles for screen sizes between 767px and 1200px */
@media (min-width: 767px) and (max-width: 1200px) {
  .shopping_cart_area {
    padding: 16px;
  }

  .table_desc table thead tr th {
    font-size: 14px;
    padding: 8px;
  }

  .table_desc table tbody tr td {
    min-width: 110px;
  }

  .table_desc table tbody tr td.product_remove {
    min-width: 90px;
  }

  .table_desc table tbody tr td.product_remove > a {
    font-size: 16px !important;
  }

  .table_desc table tbody tr td {
    padding: 8px;
    font-size: 14px;
  }

  .table_desc table tbody tr td.product_thumb {
    max-width: 160px;
  }

  .product_thumb {
    padding: 8px;
  }

  .product_thumb img {
    width: 80px;
  }

  .product-price {
    min-width: 110px;
    font-size: 14px;
  }
  .checkout_btn a {
    font-size: 13px;
    padding: 1px 6px;
    line-height: 30px;
  }
  .btn-cart {
    font-size: 8px;
    line-height: 14px;
    padding: 6px 12px;

  }
}

@media (max-width: 767.98px) {
  .table_desc {
    margin-bottom: 40px;
  }

  .table-responsive table {
    border-spacing: 1px;
  }

  .table_desc table thead tr th {
    border-bottom: 2px solid #f4d078;
    font-size: 14px;
    padding: 6px;
  }

  .table_desc table tbody tr td {
    min-width: 120px;
  }

  .table_desc table tbody tr td.product_remove {
    min-width: 70px;
  }

  .table_desc table tbody tr td.product_remove > a {
    font-size: 14px !important;
  }

  .table_desc table tbody tr td {
    padding: 6px;
    font-size: 12px;
  }

  .table_desc table tbody tr td.product_thumb {
    max-width: 120px;
  }

  .product_thumb {
    position: relative;
    padding: 6px;
  }

  .product_thumb img {
    width: 60px;
  }

  .product-price {
    min-width: 80px;
    font-size: 14px;
    font-weight: 500;
  }

  /* price section */
  .coupon_code h3 {
    line-height: 28px;
    padding: 5px 15px;
    font-size: 15px;
  }

  .coupon_inner {
    padding: 10px 14px 25px !important;
  }

  .cart_subtotal p {
    font-size: 12px;
  }

  .cart_amount {
    font-size: 12px !important;
  }
  .checkout_btn a {
    width: 100%;
  }
}

@media (max-width: 494px) {
  .table_desc {
    margin-bottom: 30px;
  }

  .table_desc table thead tr th {
    font-size: 12px;
    padding: 4px;
  }

  .table_desc table tbody tr td {
    min-width: 80px;
  }

  .table_desc table tbody tr td.product_remove {
    min-width: 50px;
  }

  .table_desc table tbody tr td.product_remove > a {
    font-size: 12px !important;
  }

  .table_desc table tbody tr td {
    padding: 5px;
    font-size: 10px;
  }

  .table_desc table tbody tr td.product_thumb {
    max-width: 80px;
  }

  .product_thumb {
    padding: 5px;
  }

  .product-price {
    min-width: 60px;
    font-size: 12px;
    font-weight: 500;
  }
  .btn-cart {
    font-size: 8px;
    line-height: 14px;
    padding: 6px 12px;

  }
}

`;
export default Cart;
