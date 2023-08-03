import Card from "./Card";
import { productCarouselData } from "./Information";
import { useState, useEffect } from "react";

export default function Second({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
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

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="rounded-3xl overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {productCarouselData.map((info, index) => (
          <Card
            key={`${info.title}_${index}`}
            product={{
              title: info.title,
              image: info.image,
              description: info.description,
            }}
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translate 100%)` }}
          ></Card>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
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
    </div>
  );
}
