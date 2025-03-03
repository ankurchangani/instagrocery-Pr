import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../assets/images/DairyProducts/DairyProducts1.jpg";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import deliveryImg from "../../assets/images/Product-emoj/10_minute_delivery.png";
import PricesImg from "../../assets/images/Product-emoj/Best_Prices_Offers.png";
import PricesImg1 from '../../assets/images/productsDetalis-img/productsDetalisImg-1.jpg'
import PricesImg2 from '../../assets/images/productsDetalis-img/productsDetalisImg-2.jpg'
import PricesImg3 from '../../assets/images/productsDetalis-img/productsDetalisImg-3.jpg'


const productDetails = {
  name: "Amul Gold Full Cream Fresh Milk",
  unit: "500 ml",
  price: "MRP ₹34",
  taxInfo: "Inclusive of all taxes",
  keyFeatures: ["Wholesome and healthy", "Pasteurized milk", "Rich in calcium"],
  additionalDetails: {
    fssaiLicense: "10018021003047",
    shelfLife: "2 days",
    returnPolicy:
      "Non-returnable. Replacement available for damaged, defective, expired, or incorrect items within 24 hours of delivery.",
    packagingType: "Pack",
    countryOfOrigin: "India",
    customerCareEmail: "info@blinkit.com",
    seller: "Moonstone Ventures LLP",
    sellerFssai: "13323999000008",
  },
  description:
    "Amul Gold Full Cream Milk (Polypack) is homogenized toned pasteurized milk. Rich and creamy, this milk is an excellent source of vitamin A and vitamin D that enhances growth and development of body tissues and the brain.",
  disclaimer:
    "Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.",
};

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(Product);
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [backgroundSize, setBackgroundSize] = useState("100%");

  const handleMouseEnter = () => {
    setBackgroundSize("150%");
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const x = (offsetX / target.offsetWidth) * 100;
    const y = (offsetY / target.offsetHeight) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("center");
    setBackgroundSize("100%");
  };
  return (
    <section className="container mx-auto p-6 lg:p-12 bg-white min-h-screen border border-gray-300 rounded-lg flex flex-col">
      <div className="flex flex-col lg:flex-row gap-6 w-full h-full">

        {/* Left Section with Zoom Effect */}
        <section className="flex flex-col items-center space-y-6 p-6 flex-1 border-r border-gray-300">
          <div
            className="w-full max-w-md h-96 rounded-lg overflow-hidden relative"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: backgroundSize,
              backgroundPosition: backgroundPosition,
              transition: "background-size 0.3s ease-in-out, background-position 0.2s ease",
            }}
          >
            <img
              src={selectedImage}
              alt={productDetails.name}
              className="w-full h-full object-cover opacity-0"
            />
          </div>


          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 justify-center">
            {[Product, PricesImg1, PricesImg2, PricesImg3].map((img, index) => (
              <div
                key={index}
                className="w-16 h-16 border border-green-500 flex items-center justify-center cursor-pointer rounded-md"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          
          {/* Product Details */}
          <div className="text-left space-y-4 w-full">
            <h3 className="text-lg font-semibold">Product Details</h3>
            <p className="text-gray-700">{productDetails.name}</p>
            <h4 className="text-md font-semibold">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {productDetails.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h4 className="text-md font-semibold">Additional Details</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {Object.entries(productDetails.additionalDetails).map(
                ([key, value]) => (
                  <li key={key}>
                    {key.replace(/([A-Z])/g, " $1")}: {value}
                  </li>
                )
              )}
            </ul>
            <h4 className="text-md font-semibold">Description</h4>
            <p className="text-gray-700">{productDetails.description}</p>
            <h4 className="text-md font-semibold">Disclaimer</h4>
            <p className="text-gray-700">{productDetails.disclaimer}</p>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex flex-col space-y-6 p-6 flex-1 sticky top-6 h-fit">
          <h1 className="text-2xl text-black font-bold">{productDetails.name}</h1>
          <Breadcrumbs>
            <BreadcrumbItem><Link to = "/">Home</Link></BreadcrumbItem>
            <BreadcrumbItem>Milk</BreadcrumbItem>
            <BreadcrumbItem>{productDetails.name}</BreadcrumbItem>
          </Breadcrumbs>
          <div className="flex justify-between items-center flex-wrap mt-4">
            <div>
              <p className="text-sm">{productDetails.unit}</p>
              <span className="font-bold">{productDetails.price}</span>
              <p className="text-gray-600">{productDetails.taxInfo}</p>
            </div>
            <button className="border border-green-600 text-green-600 px-3 py-1 rounded-md text-sm font-medium">
              ADD
            </button>
          </div>

          {/* Delivery & Pricing Info */}
          <div className="mt-6 space-y-4 border-t border-gray-300 pt-4">
            <div className="flex items-center gap-3">
              <img src={deliveryImg} alt="Superfast Delivery" className="w-12 h-12" />
              <p className="text-gray-700">
                Superfast Delivery - Get your order delivered to your doorstep at
                the earliest from dark stores near you
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={PricesImg} alt="Best Prices & Offers" className="w-12 h-12" />
              <p className="text-gray-700">
                Best Prices & Offers - Best price destination with offers directly
                from the manufacturers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductPage;
