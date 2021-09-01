import React from "react";
import "./EmptyCart.scss";
import { useHistory } from "react-router-dom";
import { useDispatch} from 'react-redux'
import Button from "../Button/Button";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { toggleCartHidden } from '../../redux/cart/cart.actions'


export default function EmptyCart() {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const history = useHistory();
const dispatch=useDispatch();


  const goToProducts = () => {
    if (browserWidth) {
      dispatch(toggleCartHidden());
      history.push("/products");
    } else {
      history.push("/products");
    }
  };

  return (
    <section className="empty-cart">
      <div className="empty-cart__sub-container">
        <h2 className="empty-cart__sub-container__title">
          No items in your cart
        </h2>
        <p className="empty-cart__sub-container__text">
          Your favourite items are just a click away
        </p>
      </div>
      <footer className="empty-cart__footer">
        <Button
          className={"empty-cart__footer__start-button"}
          onClick={() => goToProducts()}
        >
          Start Shopping
        </Button>
      </footer>
    </section>
  );
}
