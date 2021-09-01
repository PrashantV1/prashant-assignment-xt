import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartImage from "../../static/images/cart.svg";

import Image from "../Image/Image";

import "./cart-icon.styles.scss";

function CartIcon({ toggleCartHidden, itemCount }) {
  const countItem =
    itemCount <=1 ? `${itemCount} item` : `${itemCount} items`;
  return (
    <>
      <div className="cart-wrapper" onClick={toggleCartHidden}>
        <Image
          source={CartImage}
          className={"cart-wrapper__image"}
          alt={"Cart Image"}
        />
        <p className="cart-wrapper__text"> {countItem}</p>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
