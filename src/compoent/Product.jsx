import { AiOutlineArrowRight } from "react-icons/ai"; 
 import React from 'react'
import Container from '../utils'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
 
 const Product = () => {
    const [data] = useFetch("/products")


    const productsData = data?.products
   return (
     <div>
       <Container>
        <div className='mt-10 items-center flex gap-10 '>
            <h3 className='italic text-[24px]'>Today's Deals – All With Free Shipping</h3>
            <span className="flex items-center gap-2 text-[20px]">See all <AiOutlineArrowRight /></span>
            <h2 className='text-xs text-red-600 font-bold text-center '> MAHSULOTLAR MA'LUMOTI</h2>
        </div>
        <div  className='flex gap-6 '>
            {
                productsData?.slice(0,5).map(product => 
                    <div key={product.id} className='w-full mt-10 mb-10 product__card '>
                        <img className=' w-full h-[208px]  bg-gray-100  mb-4' src={product?.images} alt="" />
                        <p className="text-[16px] italic">${product?.price}</p>
                        <div className="flex">
                          <p className="text-gray-600 text-[12px] title">$599.99 </p>
                          <p className="text-gray-600 text-[12px]">· 58% OFF</p>
                        </div>
                    </div>
                )
            }
        </div>
       </Container>
     </div>
   )
 }
 
 export default Product
 