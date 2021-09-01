import React from "react";
import "./CartPage.scss";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import CardTablet from "../../CartTablet/CardTablet";

function CartPage({ itemCount }) {
  const countItems = itemCount <= 1 ? `${itemCount} item` : `${itemCount} items`;
  return (
    <main className="cartpage">
      <h1 className="cartpage__title">My Cart ({countItems})</h1>
      <CardTablet />
    </main>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartPage);
