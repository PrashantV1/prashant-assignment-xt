import React from "react";
import Button from "../Button/Button";
import CardTablet from "../CartTablet/CardTablet";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./CartModal.scss";

function CartModal({ toggleCartHidden, itemCount }) {
  const countItem = itemCount <= 1 ? `${itemCount} item` : `${itemCount} items`;

  return (
    <section className="cartmodal__section">
      <div className="cartmodal__section__heading">
        <h1 className="cartmodal__section__heading__title">
          My Cart ({countItem})
        </h1>
        <Button
          className={"cartmodal__section__heading__button"}
          onClick={toggleCartHidden}
        >
          &#10005;
        </Button>
      </div>
      <CardTablet
        className={"cartmodal__section__flex"}
      
      />
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
