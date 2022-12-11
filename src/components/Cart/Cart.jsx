import React, { useContext } from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { CartContext } from "../../context/CartContext";


const Cart = () => {
 
  const { cart ,removeItemToCart , emptyCart} = useContext(CartContext); //traigo con context
   const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
     {cart?.map((item) => (
        <div className="item" key={item.id}>
          <img src={ item.image} alt="" />
          <div className="details">
            <h1>{item.name}</h1>
         {/*    <p>{item.desc?.substring(0, 100)}</p> */}
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() =>removeItemToCart(item.id)  }
          />
          
        </div>
      ))} 
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice() }</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className="reset" onClick={() => emptyCart()}  >
        Reset Cart
      </div>
    </div>
  );
};

export default Cart;
