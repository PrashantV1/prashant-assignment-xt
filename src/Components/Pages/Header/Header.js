import React from "react";
import Logo from "../../Logo/Logo";
import "./Header.scss";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart-icon";
import CartModel from "../../CartModal/CartModal";
import { connect } from "react-redux";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { useHistory } from "react-router-dom";
import { removeCurrentUser } from "../../../redux/user/user.actions";

function Header({ currentUser, hidden,removeCurrentUser }) {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const history = useHistory();

  return (
    <header className="header">
      <div className="header__sub-container">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="header__sub-container__nav-items">
          <Link to="/" className="header__sub-container__nav-items__link">
            Home
          </Link>
          <Link
            to="/products"
            className="header__sub-container__nav-items__link"
          >
            Products
          </Link>
        </nav>
        <div className="header__sub-container__nav-wrapper">
          <nav className="header__sub-container__nav-wrapper__login">
            {currentUser ? (
              <Link  to="/signin"
              onClick={() => removeCurrentUser()}
                className="header__sub-container__nav-wrapper__login__link"
              >
                SignOut
              </Link>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="header__sub-container__nav-wrapper__login__link"
                >
                  SignIn
                </Link>
                <Link
                  to="/register"
                  className="header__sub-container__nav-wrapper__login__link"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
          <Cart />
          {hidden ? null : browserWidth ? (
            <div className="modal__overlay">
              <CartModel />
            </div>
          ) : (
            history.push("/cartpage")
          )}
        </div>
      </div>
    </header>
  );
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});


const mapDispatchToProps = (dispatch) => ({
  removeCurrentUser: () => dispatch(removeCurrentUser()),
});







export default connect(mapStatetoProps, mapDispatchToProps)(Header);
