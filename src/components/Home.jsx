// src/components/Home.jsx
import RelatedProducts from "./RelatedProducts";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ThreeTextSections from "./ThreeTextSections";

function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <main className="flex-grow">
        <RelatedProducts />
        <Carousel />
        <ThreeTextSections />
      </main>
      <Footer />
    </div>
  );
}

export default Home;