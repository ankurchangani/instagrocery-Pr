import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { MdAccessTime } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DairyProduct from "../../assets/images/DairyProducts/DairyProducts1.jpg";
import { useNavigate } from "react-router-dom";

const dairyProducts = new Array(14).fill({
  id: 1,
  image: DairyProduct,
  name: "Amul Taaza Toned Fresh Milk",
  quantity: "500 ml",
  price: "₹27",
  timeText: "30 MINS",
});

const DairyProducts = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto relative">
        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border border-gray-300 p-2 rounded-full z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft className="text-black text-lg" />
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border border-gray-300 p-2 rounded-full z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight className="text-black text-lg" />
        </button>

        <Swiper
          slidesPerView={7}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {dairyProducts.map((product, index) => (
            <SwiperSlide key={index} className="min-w-[150px]">
              <div
                className="bg-white border border-gray-300 shadow-lg p-2 rounded-lg cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Product Image */}
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain rounded-md h-[100px] w-full max-w-[150px]"
                  />
                </div>

                {/* Time Indicator */}
                <div className="flex items-center gap-1 mt-2">
                  <MdAccessTime className="text-gray-600 text-xs" />
                  <span className="text-[10px] font-semibold text-gray-700">{product.timeText}</span>
                </div>

                {/* Product Name */}
                <div className="mt-1">
                  <p className="text-[12px] font-semibold text-black leading-tight">
                    {product.name}
                  </p>
                  <span className="text-[10px] text-gray-500">{product.quantity}</span>
                </div>

                {/* Price & Add Button */}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[12px] text-black font-bold">{product.price}</p>
                  <button className="border border-green-600 text-green-600 px-3 py-0.5 rounded-md text-[10px] font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DairyProducts;
