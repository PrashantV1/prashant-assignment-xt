import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./Components/Pages/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Products from "./Components/Pages/Products/Products";
import Signin from "./Components/Pages/Signin/Signin";
import Register from "./Components/Pages/Register/Register";
import CartPage from "./Components/Pages/CartMob/CartPage";
import Footer from "./Components/Pages/Footer/Footer";
import Checkout from "./Components/Pages/Checkout/Checkout" ;

function App(currentUser) {
  console.log("User", currentUser);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/products" render={(props) => <Products {...props} />} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/checkout"
          render={(props) => <Checkout {...props} />}
        />
        <Route
          exact
          path="/cartpage"
          render={(props) => <CartPage {...props} />}
        />
      </Switch>
      <Footer />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
