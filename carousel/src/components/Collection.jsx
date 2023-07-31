import Card from "./Card";
import { productCarouselData } from "./Information";

export default function Collection() {
  return (
    <div>
      {productCarouselData.map((info, index) => (
        <Card
          key={`${info.title}_${index}`}
          product={{
            title: info.title,
            image: info.image,
            description: info.description,
          }}
        ></Card>
      ))}

      {/* map out the cards? */}
    </div>
  );
}
