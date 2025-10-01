// src/components/Home.jsx
import RelatedProducts from "./RelatedProducts";

import Gallery from "./Gallery";

import Carousel from "./Carousel";
import ThreeTextSections from "./ThreeTextSections";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-grow">
        <RelatedProducts />
        <Carousel />
<Gallery />
        <ThreeTextSections />
      </main>
     
    </div>
  );
}

export default Home;