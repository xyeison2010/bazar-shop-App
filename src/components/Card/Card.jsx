import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ product ,categories}) => {
  //console.log(item);
  return (
    <>
 
      <div className="card">
        <div className="image">
          <span>New Season</span>
          <Link className="link" to={`/product/${product.id}`}   state={{ data: product }}> {/* paso el estado */}
          <img
            src={
              product.image
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              product.image
            }
            alt=""
            className="secondImg"
          /> </Link>
        </div>
        <h2>{product.name}</h2>
        <p> Category :
          {categories.map((c) => {
            if (c.id === product.categoryId) return c.name;
          })}
        </p>
        <p>rating: {"★".repeat(product.rating).padEnd(5, "☆")}</p>
        <p>color : {product.color}</p>
        <div className="prices">
          <h3>${product.price + 20}</h3>
          <h3>${product.price}</h3>
        </div>
      </div>
   

    </>
    
  );
};

export default Card;
