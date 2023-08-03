import Card from "./Card";
import { productCarouselData } from "./Information";
import { useState, useEffect } from "react";

export default function Collection() {
  const [currentCard, setCurrentCard] = useState(0);

  function prevSlide() {
    setCurrentCard((currentCard) =>
      currentCard === 0 ? productCarouselData.length - 1 : currentCard - 1
    );
    console.log(currentCard);
  }

  function nextSlide() {
    setCurrentCard((currentCard) =>
      currentCard === productCarouselData.length - 1 ? 0 : currentCard + 1
    );
    console.log(currentCard);
  }

  return (
    <div className="w-r rounded-3xl overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentCard * 70}rem)` }}
      >
        {productCarouselData.map((info, index) => (
          <div className="w-a">
            <Card
              key={`${info.title}_${index}`}
              product={{
                title: info.title,
                image: info.image,
                description: info.description,
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center w-r justify-between p-4">
        {[
          [prevSlide, "<"],
          [nextSlide, ">"],
        ].map(([direc, arrow]) => (
          <button
            onClick={direc}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            {arrow}
          </button>
        ))}
      </div>

      <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
        {productCarouselData.map((_, i) => (
          <div
            className={`transition-all w-3 h-3 bg-white rounded-full
              ${currentCard === i ? "" : "bg-opacity-50"}`}
          />
        ))}
      </div>
    </div>
  );
}
