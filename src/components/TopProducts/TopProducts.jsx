import React from "react";
import TPImg1 from "../../assets/TopProducts/TPImg1.jpg";
import TPImg2 from "../../assets/TopProducts/TPImg2.jpg";
import TPImg3 from "../../assets/TopProducts/TPImg3.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: TPImg1,
    title: "Casual Wear",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "0",
    rating: 4.8,
  },
  {
    id: 2,
    img: TPImg2,
    title: "Printed Shirts",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "200",
    rating: 5.0,
  },
  {
    id: 3,
    img: TPImg3,
    title: "Women Shirts",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "400",
    rating: 4.9,
  },
];

const TopProducts = ({handleOrderPopUp}) => {
  return (
    <div className="container">
      {/* Título */}
      <div className="text-left mb-10">
        <p data-aos="fade-up" className="text-sm text-primary mb-1">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni
          fugiat pariatur itaque sint exercitationem facilis repudiandae
          corrupti alias.
        </p>
      </div>

      {/* Grid dos cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="w-[250px] rounded-lg shadow-md overflow-hidden border bg-white dark:bg-gray-900 
                       transform transition duration-300 hover:shadow-xl hover:-translate-y-1 mb-5"
          >
            <div className="overflow-hidden cursor-pointer">
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-2 flex flex-col gap-1 border-t cursor-pointer">
              <div className="flex justify-center items-center gap-1 ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="font-semibold flex justify-center items-center dark:text-white">
                {data.title}
              </h1>
              <p className="text-[13px] text-gray-600 text-center px-2 dark:text-gray-300">
                {data.description}
              </p>

              <div className="flex justify-center mt-2">
                <button onClick={handleOrderPopUp}
                  className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-6 rounded-full
               transition-all duration-300 transform 
               hover:scale-105 hover:shadow-lg hover:from-secondary hover:to-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
