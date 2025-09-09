import { useState } from "react";

const images = [
  "asset/IMG_7.jpg",
"asset/IMG_11.jpg",
  "asset/IMG_9.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}