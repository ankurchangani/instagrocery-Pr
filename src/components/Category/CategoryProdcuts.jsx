import React from "react";
import { useParams } from "react-router-dom";
import product1 from "../../assets/images/DairyProducts/DairyProducts1.jpg";
import product2 from "../../assets/images/DairyProducts/DairyProducts2.jpg";
import product3 from "../../assets/images/productsCatograyImg/productCatogray1.jpg";
import product4 from "../../assets/images/productsCatograyImg/productCatogray2.jpg";
import product5 from "../../assets/images/productsCatograyImg/productCatogray3.jpg";

export const CategoryProducts = () => {
  const { id } = useParams();

  const categories = [
    "Vegetables & Fruits",
    "Dairy & Breakfast",
    "Munchies",
    "Cold Drinks & Juices",
    "Instant & Frozen Food",
    "Tea, Coffee & Health Drinks",
    "Bakery & Biscuits",
  ];

  // Dummy product details
  const products = [
    {
      id: 1,
      name: "Amul Taaza Toned Fresh Milk",
      image: product1,
      size: "500 ml",
      price: "₹34",
    },
    {
      id: 2,
      name: "Amul Taaza Toned Fresh Milk",
      image: product2,
      size: "500 ml",
      price: "₹57",
    },
    {
      id: 3,
      name: "Amul Shakti Fresh Milk",
      image: product3,
      size: "500 ml",
      price: "₹31",
    },
    {
      id: 4,
      name: "Amul Gold Full Cream Fresh Milk + Baby Banana Combo",
      image: product4,
      size: "500 ml",
      price: "₹58",
    },
    {
      id: 5,
      name: "Amul Taaza Toned Fresh Milk + Baby Banana (Robusta) Combo",
      image: product5,
      size: "500 ml",
      price: "₹51",
    },
  ];

  return (
    <section className="container mx-auto py-10 px-4">
      {/* Category Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Category: {id}
        </h1>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Explore products in the {id} category.
        </p>
      </div>

      {/* Categories Section (Horizontally Scrollable) */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-2 mb-6">
        {categories.map((category, index) => (
          <span
            key={index}
            className="whitespace-nowrap text-gray-700 text-sm font-medium px-3 py-1 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Products Grid (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-300 shadow-lg p-4 rounded-lg cursor-pointer"
          >
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain rounded-md h-[120px] w-full max-w-[140px]"
              />
            </div>

            {/* Timer Icon */}
            <div className="flex items-center text-gray-600 text-xs mt-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8-3.58 8-8 8z"></path>
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
              </svg>
              <span className="ml-1">30 MINS</span>
            </div>

            {/* Product Details */}
            <div className="mt-2">
              <p className="text-sm font-semibold text-black leading-tight">
                {product.name}
              </p>
              <span className="text-xs text-gray-500">{product.size}</span>
            </div>

            {/* Price and Add Button */}
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-black font-bold">{product.price}</p>
              <button className="border border-green-600 text-green-600 px-3 py-1 rounded-md text-xs font-medium hover:bg-green-600 hover:text-white transition">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
