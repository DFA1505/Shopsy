import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas ad odit quos reiciendis perspiciatis optio nisi in voluptas dolore molestias molestiae, omnis quod obcaecati excepturi minus. Illo, expedita minima.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas ad odit quos reiciendis perspiciatis optio nisi in voluptas dolore molestias molestiae, omnis quod obcaecati excepturi minus. Illo, expedita minima.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas ad odit quos reiciendis perspiciatis optio nisi in voluptas dolore molestias molestiae, omnis quod obcaecati excepturi minus. Illo, expedita minima.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Leo Messi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas ad odit quos reiciendis perspiciatis optio nisi in voluptas dolore molestias molestiae, omnis quod obcaecati excepturi minus. Illo, expedita minima.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas ad odit quos reiciendis perspiciatis optio nisi in voluptas dolore molestias molestiae, omnis quod obcaecati excepturi minus. Illo, expedita minima.",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary mb-1">
            What our customers say
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Testimonial
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400 dark:text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-3 mb-4" data-aos="fade-up">
                {" "}
                {/* espaço lateral */}
                <div className="flex flex-col shadow-lg py-8 px-6 rounded-xl bg-primary/10 dark:bg-slate-500">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20 mx-auto mb-4"
                  />
                  <h1 className="text-xl font-semibold text-center">
                    {data.name}
                  </h1>
                  <p className="text-xs text-gray-400 dark:text-white text-center mb-2">
                    {data.text}
                  </p>
                </div>
              </div>
              
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
