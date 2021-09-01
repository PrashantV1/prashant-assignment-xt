import React from "react";
import useProducts from "../../../utils/useProducts";
import Carousel from "../../Carousel/Carousel";
import Section from "../../Section/Section";
import "./Home.scss";

export default function Home() {
  const { filteredCategory, handleProduct } = useProducts();

  return (
    <main className="home-container">
      <Carousel />
      {filteredCategory.map((category, index) => (
        <Section
          key={index}
          id={category.id}
          url={category.imageUrl}
          heading={category.name}
          text={category.description}
          button={category.key}
          order={category.order}
          handleProduct={handleProduct}
        />
      ))}
    </main>
  );
}
