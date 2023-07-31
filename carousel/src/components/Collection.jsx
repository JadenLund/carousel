import Card from "./Card";
import { productCarouselData } from "./Information";

export default function Collection() {
  return (
    <div className="overflow-hidden">
      {/* set height here to hide overflow */}
      <div className="flex flex-wrap">
        {productCarouselData.map((info, index) => (
          <Card
            key={`${info.title}_${index}`}
            product={{
              title: info.title,
              image: info.image,
              description: info.description,
            }}
          />
        ))}
      </div>
    </div>
  );
}
