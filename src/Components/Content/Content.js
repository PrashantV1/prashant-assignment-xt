import React from "react";
import "./Content.scss";
import Button from "../Button/Button";

export default function Content({
  className,
  heading,
  text,
  button,
  id,
  handleProduct,
}) {
  return (
    <div className={`${className} content`}>
      <h2 className="content__header">{heading}</h2>
      <p className="content__text">{text}</p>
      <Button onClick={() => handleProduct(id)}>Explore {button}</Button>
    </div>
  );
}
