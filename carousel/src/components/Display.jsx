import { useState, useEffect } from "react";
import Collection from "./Collection";
import { productCarouselData } from "./Information";

export default function Display() {
  const [currentCard, setCurrentCard] = useState(0);

  function prevSlide() {
    setCurrentCard((currentCard) =>
      currentCard === 0 ? productCarouselData.length - 1 : currentCard - 1
    );
  }

  function nextSlide() {
    setCurrentCard((currentCard) =>
      currentCard === productCarouselData.length - 1 ? 0 : currentCard + 1
    );
  }

  //   useEffect(() => {
  //     if (!autoSlide) return;
  //     const slideInterval = setInterval(nextSlide, autoSlideInterval);
  //     return () => clearInterval(slideInterval);
  //   }, []);

  return (
    <div>
      <Collection
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translate 100%)` }}
      >
        {/* COME BACK TO THIS PART */}
        {currentCard}
        {console.log(currentCard)}
      </Collection>

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
