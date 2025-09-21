import React from "react";
import Image1 from "../../assets/Hero/Image1.jpg";
import Image2 from "../../assets/Hero/Image2.jpg";
import Image3 from "../../assets/Hero/Image3.jpg";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro suscipit iusto, consequatur, non consectetur ex mollitia unde quas recusandae exercitationem ullam! Eius nam delectus perspiciatis dolore ad, dolor ut.",
  },
  {
    id: 2,
    img: Image2,
    title: "Up to 30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro suscipit iusto, consequatur, non consectetur ex mollitia unde quas recusandae exercitationem ullam! Eius nam delectus perspiciatis dolore ad, dolor ut.",
  },
  {
    id: 3,
    img: Image3,
    title: "Up to 70% off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro suscipit iusto, consequatur, non consectetur ex mollitia unde quas recusandae exercitationem ullam! Eius nam delectus perspiciatis dolore ad, dolor ut.",
  },
];

const Hero = ({handleOrderPopUp}) => {

    var settings = {
        dots:false,
        arrows: false,
        infinite:true,
        speed: 800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus: true,

    }


  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-9"></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
            {ImageList.map((data)=>(
          <div >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  {data.title}
                </h1>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">
                  {data.description}
                </p>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                  <button onClick={handleOrderPopUp} 
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>

              <div className="order-1 sm:order-2">
                <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                  <img
                    src={data.img}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[300px] sm:w-[300px] sm:scale-125 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
