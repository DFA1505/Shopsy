import React from "react";
import PImg1 from "../../assets/Products/PImg1.jpg";
import PImg2 from "../../assets/Products/PImg2.jpg";
import PImg3 from "../../assets/Products/PImg3.jpg";
import PImg4 from "../../assets/Products/PImg4.jpg";
import PImg5 from "../../assets/Products/PImg5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: PImg1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: PImg2,
    title: "Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: PImg3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: PImg4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: PImg5,
    title: "Fashion T-Shirt",
    rating: 5.0,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary mb-1">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400 dark:text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni
            fugiat pariatur itaque sint exercitationem facilis repudiandae
            corrupti alias, libero aperiam recusandae ullam quas error labore
            ipsam quaerat, illo veritatis?
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div className="font-semibold">
                  <h3 className="dark:text-white">{data.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {data.color}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="dark:text-white">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="flex mt-10 mx-auto bg-gradient-to-r from-primary to-secondary text-white py-1 px-6 rounded-md
               transition-all duration-300 transform 
               hover:scale-105 hover:shadow-lg hover:from-secondary hover:to-primary" data-aos="fade-up" data-aos-delay="500"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
