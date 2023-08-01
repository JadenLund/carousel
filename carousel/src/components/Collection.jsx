import Card from "./Card";
import { productCarouselData } from "./Information";
import { useState, useEffect } from "react";

export default function Collection() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap">
        {productCarouselData.map((info, currentCard, index) => (
          <Card
            key={`${info.title}_${index}`}
            currentCard={currentCard}
            product={{
              title: info.title,
              image: info.image,
              description: info.description,
            }}
          ></Card>
        ))}
      </div>
    </div>
  );
}
