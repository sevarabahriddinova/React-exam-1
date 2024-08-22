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
        <h2 className='text-xs text-red-900 font-bold text-center mt-10'> MAHSULOTLAR MA'LUMOTI</h2>
        <div  className='flex justify-between'>
            {
                productsData?.slice(0,7).map(product => 
                    <div key={product.id} className='w-full mt-10 mb-10 text-center'>
                        <img className='w-[152px] h-[152px] object-cover rounded-[50%] bg-gray-400 mb-4' src={product?.images} alt="" />

                    </div>
                )
            }
        </div>
       </Container>
     </div>
   )
 }
 
 export default Product
 