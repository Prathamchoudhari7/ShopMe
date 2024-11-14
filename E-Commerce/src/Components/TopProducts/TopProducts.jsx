import React from 'react'
import Imag1 from "../../assets/Shirt.jpg";
import Imag2 from "../../assets/Printed.jpg";
import Imag3 from "../../assets/Wshirt.jpg";
import Imag4 from "../../assets/Tshirt.jpg";
import { FaStar } from "react-icons/fa6";
 const ProductsData = [
  
  {
    id: 1,
    img: Imag1,
    title: "CAsual Wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem recusandae soluta quisquam dignissimos inventore unde dolore nihil numquam asperiores, nisi nesciunt quia nostrum, ea dolorum aperiam incidunt, enim porro. "
  },
  {
    id: 2,
    img: Imag2,
    title: "Printed Shirts",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem recusandae soluta quisquam dignissimos inventore unde dolore nihil numquam asperiores, nisi nesciunt quia nostrum, ea dolorum aperiam incidunt, enim porro. "
  },
  {
    id: 3,
    img: Imag3,
    title: "Women Shirts",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem recusandae soluta quisquam dignissimos inventore unde dolore nihil numquam asperiores, nisi nesciunt quia nostrum, ea dolorum aperiam incidunt, enim porro. "
  },
  {
    id: 4,
    img: Imag4,
    title: "Tshirts",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem recusandae soluta quisquam dignissimos inventore unde dolore nihil numquam asperiores, nisi nesciunt quia nostrum, ea dolorum aperiam incidunt, enim porro. "
  },
 ];

const TopProducts = ({ handelOrderPopup }) => {
  return (
    <div className="container">
      <div className="text-left mg-24">
        <p data-aos="fade-up" className=" text-center text-sm text-primery"> Top Rated products for you </p>
        <h1 data-aos="fade-up" className="text-center text-3xl font-bold">Best Products</h1>
        <p  data-aos="fade-up" className=" text-center text-xs text-gray-400"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni ut culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit.  nesciunt soluta odio at quo veniam harum error Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur officiis numquam recusandae exercitationem dicta, sapiente provident amet necessitatibus odit excepturi incidunt facilis facere consequatur non nulla voluptate velit nisi!</p>
    
        <div className='mt-28'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md::grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductsData.map((data)=>(
              <div data-aos="zoom-in" className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:text-white relative shadow-xl duration-300 group  max-w-[300px]">
                <div>
                  <img src={data.img} alt="" className="max-w-[140px] block mx-auto trasform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md " />
                </div>
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <h1 className="text-xl font-bold ">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-primery hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primery" onClick={handelOrderPopup}>Order now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopProducts;