import React from "react";
import "./CartSection.scss";
import Counter from "../Counter/Counter";
import Image from "../Image/Image";

export default function CartSection({ product }) {
  const totalPrice = product?.quantity * product?.price;

  return (
    <section className="cart-section">
      <Image
        source={product?.imageUrl}
        alt={`Image of ${product?.name}`}
        className="cart-section__image"
      />
      <h2 className="cart-section__title">{product?.name}</h2>
      <Counter
        id={product?.id}
        Product={product}
      />
      <p className="cart-section__totalprice">Rs.{totalPrice}</p>
    </section>
  );
}
