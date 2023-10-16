import React from "react";
import styled from "styled-components";
import WishlistComponent from "../../components/client/Wishlist";
import { useWishlist } from "../../context/WishListContext";

const Wishlist = () => {
  const { state:wishListState,dispatch:wishListDispatch } = useWishlist();
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
                            <th>Stock Status</th>
                            <th>Add To Cart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishListState.wishlist?.map((wishlist) =>
                            wishlist ? (
                              <WishlistComponent
                                key={wishlist.id}
                                wishlist={wishlist}
                                wishdispatch={wishListDispatch}
                              />
                            ) : (
                              <h1>Wishlist is empty</h1>
                            )
                          )
                          }
                        </tbody>
                      </table>
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
    border-bottom: 3px solid #0FD178;
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
    background: #0FD178;
    font-size: 12px;
    font-weight: 600;
    height: 38px;
    line-height: 18px;
    padding: 10px 20px;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 3px;
    transition: all 0.4s ease 0s;
  }
  .btn-cart:hover {
    background: #131921;
    text-decoration: none;
    color: #fff !important;
  }
  .btn-cart:before {
    content: '';
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

export default Wishlist;
