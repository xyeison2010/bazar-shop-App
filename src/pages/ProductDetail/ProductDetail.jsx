import { useState, useEffect, useContext } from "react";
import "./ProductDetail.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import { useLocation } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

function ProductDetail() {
  const location = useLocation();
  const product = location.state.data; //obtengo state del link de router-dom
  const { addItemToCart} = useContext(CartContext);
  const [qty, setQuantity] = useState(1);
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="mainImg">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>{product.name}</h1>
          <span className="price">${product.price}</span>
          <div className="quantity">
          <button
                onClick={() =>
                  setQuantity((qty) => (qty === 1 ? 1 : qty - 1))
                }
              >
                -
              </button>
              {qty}
              <button onClick={() => setQuantity((qty) => qty + 1)}>+</button>
          </div>
          <button className="add" onClick={() => addItemToCart(product , qty)}>
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
