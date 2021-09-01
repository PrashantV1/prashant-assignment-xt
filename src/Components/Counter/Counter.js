import React from "react";
import "./Counter.scss";
import Button from "../Button/Button";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

function Counter({ Product, addItem, removeItem }) {
  const { quantity, price, stock } = Product;

  return (
    <div className="counter">
      <Button onClick={() => removeItem(Product)} className={"counter__button"}>
        -
      </Button>
      <p className="counter__text">{quantity}</p>
      <Button
        onClick={() => addItem(Product)}
        className={"counter__button"}
        disabled={stock === quantity}
      >
        +
      </Button>
      <p className="counter__multiply">&#10005;</p>
      <p className="counter__text">{price}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(Counter);
