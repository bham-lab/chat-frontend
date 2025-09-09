export default function ProductCard({ name, price, image }) {
  return (
    <div className="relative w-48 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain bg-black"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-xs">${price}</p>
      </div>
    </div>
  );
}