import React from "react";
import Imag1 from "../../assets/White.jpg";
import Imag2 from "../../assets/Red.png";
import Imag3 from "../../assets/Brown.webp";
import Imag4 from "../../assets/Yellow.jpg";
import Imag5 from "../../assets/black.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Imag1,
    title: "Women Ethnic",
    rating: 5.0,
    colour: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Imag2,
    title: "Women Western",
    rating: 4.0,
    colour: "Red",
    aosDelay: "200",
  },
    {
    id: 3,
    img: Imag3,
    title: "Goggles",
    rating: 4.5,
    colour: "Brown",
    aosDelay: "400",
  },
    {
    id: 4,
    img: Imag4,
    title: "Women Ethnic",
    rating: 4.7,
    colour: "Yellow",
    aosDelay: "600",
  },
    {
    id: 5,
    img: Imag5,
    title: "Women Ethnic",
    rating: 4.2,
    colour: "black",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className=" mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primery"> Top Selling Products for you</p>
          <br />
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <br />
          <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint. Cum obcaecati modi fugiat ab debitis consectetur, dicta dolorum, perspiciatis quidem eos fuga officiis accusantium sequi. Quas vel doloremque maiores.</p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data)=>(
              <div data-aos="fade-up" data-aos-delay={data.aosDelay}
              key={data.id} className="space-y-3">
                <img src={data.img} alt="Cover Image" className="[h-220px] w-[150px] object-cover rounded-md" />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-400"> {data.colour}</p>
                  <div className="text-yellow-400">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  </div>
                  </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primery text-white py-1 px-5 rounded-md">View all button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products ;