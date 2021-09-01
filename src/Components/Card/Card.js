import React from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import Button from "../Button/Button";
import Image from "../Image/Image";
import "./Card.scss";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

function Card({ name, imageUrl, price, stock, text, id, addItem }) {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const product = {
    id: id,
    imageUrl: imageUrl,
    name: name,
    price: price,
    stock:stock
  };

  return (
    <section className="card-container">
      <h2 className="card-container__title">{name}</h2>
      <figure className="card-container__image">
        <Image
          source={imageUrl}
          alt={`Image of ${name}`}
          className={"product-image"}
        />
      </figure>
      <p className="card-container__text" title={text}>
        {text}
      </p>
      <section className="card-container__section">
        {browserWidth ? (
          <>
            <p className="card-container__section__price">MRP Rs.{price}</p>
            <Button
              onClick={() => addItem(product)}
              className={"card-container__section__buy-button"}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Button
            onClick={() => addItem(product)}
            className={"card-container__section__buy-button"}
          >
            Buy Now @ Rs.{price}
          </Button>
        )}
      </section>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => dispatch(addItem(product)),
});

export default connect(null, mapDispatchToProps)(Card);
