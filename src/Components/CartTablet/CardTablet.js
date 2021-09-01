import React from "react";
import "./CardTablet.scss";
import discountImage from "../../static/images/lowest-price.png";
import Button from "../Button/Button";

import CartSection from "../CartSection/CartSection";
import Image from "../Image/Image";
import EmptyCart from "../EmptyCart/EmptyCart";
import StripeButton from  "../stripe-button/stripe-button.component"
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems, selectCartItemsCount,selectCartTotal } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useHistory } from "react-router-dom";

 function CardTablet({className = "", cartItems, itemCount ,total,payment,toggleCartHidden}) {
const  history=useHistory();
  return (
    <div className={`${className} cart-tablet`}>
      {/* Cart Page when Items are Present */}
      {itemCount > 0 ? (
        <>
          <section className="cart-tablet__section-wrapper">
            {Object.values(cartItems).map((cartItems) => {
              return <CartSection key={cartItems?.id} product={cartItems} />;
            })}

            <div className="cart-tablet__discount">
              <Image
                source={discountImage}
                alt={"Discounted Image"}
                className={"cart-tablet__discount__img"}
              />
              <p className="cart-tablet__discount__text">
                You won't find it cheaper anywhere
              </p>
            </div>
          </section>
{payment ?  <StripeButton price ={total} />:
          <footer className="cart-tablet__footer">
            <p className="cart-tablet__footer__text">
              Promo code can be applied on payment page
            </p>
            <Button className={"cart-tablet__footer__buyout-button"}
            onClick={() => {
              history.push('/checkout');
              toggleCartHidden()
          }}
            >
              <span>Proceed to Checkout</span>
              <span>Rs.{total} &#10095;</span>
            </Button>
          </footer>}
        </>
      
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
  total: selectCartTotal

})


export default connect(mapStateToProps,mapDispatchToProps)(CardTablet)