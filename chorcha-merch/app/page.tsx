import Link from "next/link";
import React from "react";

// Define the component using a TypeScript React Functional Component (FC)
const FuturisticStore: React.FC = () => {
  // --- Tailwind's Dark/Futuristic Color Palette ---
  const primaryAccent = "text-cyan-400"; // Neon Cyan
  const secondaryAccent = "text-purple-400"; // Neon Purple
  const bgDark = "bg-gray-900";
  const cardBg = "bg-gray-800";
  const buttonPrimary = "bg-cyan-600 hover:bg-cyan-500 text-gray-900 font-bold";
  const products = [
    {
      name: "Cypher Hoodie",
      price: "$129.99",
      placeholder: "Hoodie-001",
      imageUrl:
        "https://media.istockphoto.com/id/1177415728/photo/mens-black-blank-hoodie-template-from-two-sides-natural-shape-on-invisible-mannequin-for-your.jpg?s=612x612&w=0&k=20&c=z6Wid_C4aXNwqMX-6z-Z17eVBHpQZRnQF-SgnrP6pig=", // Placeholder Image URL
      imageAlt: "Futuristic black hoodie with glowing cyan mask",
    },
    {
      name: "Matrix Tee",
      price: "$49.99",
      placeholder: "Tee-004",
      imageUrl:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Dk9vgHFqFrwXQNfnEq8_0WN6IjQ35UysBNaMgUh4IjA=", // Placeholder Image URL
      imageAlt: "Black t-shirt with green geometric design",
    },
    {
      name: "Neuro-Cap",
      price: "$34.99",
      placeholder: "Cap-012",
      imageUrl:
        "https://media.istockphoto.com/id/1451763647/photo/blue-baseball-cap.jpg?b=1&s=612x612&w=0&k=20&c=qtlcCt-wrri9d32z6VF5TRmSa2q8Z8KcHl5BFShtULw=", // Placeholder Image URL
      imageAlt: "Black futuristic baseball cap with glowing line",
    },
    {
      name: "Rogue Jacket",
      price: "$299.99",
      placeholder: "Jacket-009",
      imageUrl:
        "https://media.istockphoto.com/id/163208487/photo/male-coat-isolated-on-the-white.jpg?s=612x612&w=0&k=20&c=3Sdq5xnVS2jOYPNXI6JLwAumzyelcP_VgKVW0MVUhwo=", // Placeholder Image URL
      imageAlt: "Red and black armored jacket with glowing panels",
    },
  ];

  return (
    <div className={`${bgDark} min-h-screen text-gray-100 font-mono`}>
      {/* 1. Navbar */}

      {/* 2. Body (Futuristic Marketing Shopping UI) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Marketing/Hero Section */}
        <section className="mb-16 border-b border-dashed border-cyan-500/30 pb-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight">
                THE <span className={primaryAccent}>FUTURE</span> IS NOW.
              </h1>
              <p className="text-xl text-gray-400 mb-6">
                Seamless augmented reality integration. Clothing designed for
                the new digital frontier.
              </p>
              <button className="px-8 py-3 bg-purple-600 text-white font-bold uppercase tracking-wider rounded-md hover:bg-purple-500 transition duration-300 border border-purple-400">
                Explore The Grid
              </button>
            </div>
            <div
              className={`h-64 flex items-center justify-center border-4 border-cyan-500/50 p-4 relative ${cardBg}`}
            >
              <p className={`${primaryAccent} text-lg`}>
                [Product Hologram Visualization Here]
              </p>
              <div
                className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-red-500/70 to-transparent animate-pulse"
                style={{
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                }}
              />
            </div>
          </div>
        </section>

        {/* Product Grid with Image Tags */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-l-4 border-purple-500 pl-4">
            <span className={secondaryAccent}>AUGMENTED</span> ESSENTIALS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`${cardBg} p-6 rounded-lg border border-gray-700 transition duration-300 hover:border-cyan-500/50 hover:scale-[1.03]`}
              >
                {/* 🖼️ Image Tag Added Here */}
                <div className="mb-4 h-64 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="object-cover w-full h-full rounded-md transform transition duration-500 hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className={`${secondaryAccent} font-bold mb-4`}>
                  {product.price}
                </p>
                <button className={`w-full py-2 rounded ${buttonPrimary}`}>
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Footer (Social Links) */}
      <footer className="bg-gray-800 border-t border-purple-500/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright / Info */}
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2077 CYBERWEAR Corp. All data streams reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 text-2xl">
            {/* Using text icons for demonstration */}
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition duration-150"
              aria-label="Visit us on Instagram"
            >
              📸
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition duration-150"
              aria-label="Follow us on Twitter/X"
            >
              🐦
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition duration-150"
              aria-label="Join us on Discord"
            >
              👾
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition duration-150"
              aria-label="View our GitHub repo"
            >
              ⚙️
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FuturisticStore;
