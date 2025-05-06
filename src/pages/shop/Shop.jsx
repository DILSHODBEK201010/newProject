import React from 'react'
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react"
import { FcLike } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios"

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('//dummyjson.com/products/category/smartphones')
      .then(res => {
        console.log(res.data.products)
        setProducts(res.data.products)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      <div className='container mt-24 w-full h-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto'>

        {products.map(pro => (
          <div className="child border shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full max-w-sm p-6 rounded-md mx-auto" key={pro.id}>
            <img src={pro.thumbnail} alt={pro.title} className="w-full h-48 object-cover rounded" />
            <h2 className="title text-center mt-4 font-semibold text-lg">{pro.title}</h2>
            <p className='text-center text-gray-700'>{pro.price} $</p>

            <div className="icons flex mt-5 font-bold text-2xl cursor-pointer items-center justify-between px-4">
              <FcLike />
              <FaCartShopping />
            </div>
          </div>
        ))}

      </div>
      <Footer />
    </>
  )
}

export default Shop
