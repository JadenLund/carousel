export default function Card({ product }) {
  return (
    <div className="overflow-hidden w-lg">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} />
    </div>
  );
}
