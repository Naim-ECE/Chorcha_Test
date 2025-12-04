const Caps = () => {
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
        "https://media.istockphoto.com/id/895119646/photo/red-hat.jpg?s=612x612&w=0&k=20&c=TCSmgPIhjS5Jxzip95w8i478BTvOFKuDnvcMMAEkOUA=", // Placeholder Image URL
      imageAlt: "Futuristic black hoodie with glowing cyan mask",
    },
    {
      name: "Matrix Tee",
      price: "$49.99",
      placeholder: "Tee-004",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-cap-cartoon-illustration_23-2150985768.jpg?semt=ais_hybrid&w=740&q=80", // Placeholder Image URL
      imageAlt: "Black t-shirt with green geometric design",
    },
    {
      name: "Neuro-Cap",
      price: "$34.99",
      placeholder: "Cap-012",
      imageUrl:
        "https://media.istockphoto.com/id/1219165217/vector/baseball-cap-isolated-on-white.jpg?s=612x612&w=0&k=20&c=0nvzCHmg2Hty6ANg-klFEmL4vAK_VhxICEvVdtisLhY=", // Placeholder Image URL
      imageAlt: "Black futuristic baseball cap with glowing line",
    },
    {
      name: "Rogue Jacket",
      price: "$299.99",
      placeholder: "Jacket-009",
      imageUrl:
        "https://media.istockphoto.com/id/1219165217/vector/baseball-cap-isolated-on-white.jpg?s=612x612&w=0&k=20&c=0nvzCHmg2Hty6ANg-klFEmL4vAK_VhxICEvVdtisLhY=", // Placeholder Image URL
      imageAlt: "Red and black armored jacket with glowing panels",
    },
  ];
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Marketing/Hero Section */}

        {/* Product Grid with Image Tags */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-l-4 border-purple-500 pl-4">
            <span className={secondaryAccent}>Caps</span>
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
    </>
  );
};

export default Caps;
