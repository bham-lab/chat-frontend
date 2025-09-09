import ProductCard from "./ProductCard";

const products = [
  { name: "ghh", price: 20, image: "asset/IMG_2.jpg" },
  { name: "Acme Prism T-Shirt", price: 25, image: "asset/IMG_1.jpg" },
  { name: "Acme Baby Cap", price: 10, image: "asset/IMG_3.jpg" },
  { name: "Acme Cap", price: 20, image: "asset/IMG_4.jpg" },
  { name: "Acme Baby Onesie", price: 10, image: "asset/IMG_8.jpg" },
];

export default function RelatedProducts() {
  return (
    <section className="bg-neutral-900 text-white py-4 px-6">
      {/* Header: Logo + Text (left) + Login (right) */}
      <div className="flex items-center justify-between mb-4 -mx-4">
        {/* Left: Logo + Title */}
        <div className="flex items-center">
          <img
            src="asset/IMG_10.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover mr-3"
          />
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              ጽብቅተይ
            </h2>
            <p className="text-sm text-gray-400">መልካም ልደት</p>
          </div>
        </div>

        {/* Right: Login Button */}
<button
  onClick={() => (window.location.href = "/login")}
  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
>
  Login
</button>
      </div>

      {/* Gradient Partition Line */}
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-gray-400 -mx-4 mb-6"></div>

      {/* Products */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}