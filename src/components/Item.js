import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function Item({ name, category }) {
  const [inCart, AddToCart] = useState(false);

  const handleClick = () => {
    AddToCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove from cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
