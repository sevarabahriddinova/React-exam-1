import { AiOutlineArrowRight } from "react-icons/ai"; 
import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import React from 'react'
import Container from '../utils'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

import call from "../assets/call.svg"
import savat from "../assets/savat.svg"
import logo from "../assets/logo.svg"
import sumka from "../assets/sumka.png"
import merrell from "../assets/maerrell.png"
import specialized from "../assets/specialized.png"
 

const Header = () => {
  return (
    <div>
      <Container >
        <nav className='flex justify-between'>
            <ul className='flex gap-8 items-center'>
                <li className='flex gap-2'>
                    <h3 className='text-xs'>Hi!</h3>
                    <Link to={"/login"} className='text-blue-900 text-xs' >Sign in</Link>
                    <h3 className='text-xs'>or</h3>
                    <Link to={"/login"} className='text-blue-900 text-xs'>register</Link>
                </li>
                <li><a href="#" className='text-xs'>Daily Deals</a></li>
                <li><a href="#" className='text-xs'>Brand Outlet</a></li>
                <li><a href="#" className='text-xs'>Help & Contact</a></li>
            </ul>
            
            <ul className='flex gap-4'>
                <li><a href="#" className='text-xs'>Sell</a></li>
                <li> 
                    <select className='border-0 outline-none text-xs'> 
                        <option value="" className='text-xs'>Watchlist</option>
                    </select> 
                 </li>
                <li> 
                    <select className='border-0 outline-none text-xs'> 
                        <option value="" className='text-xs'> My eBay</option>
                    </select> 
                 </li>
                 <li>
                    <a href="#">
                    <img src={call} alt="" />
                    </a>
                 </li>
                 <li><a href="#"><img src={savat} alt="" /></a></li>
            </ul>
        </nav>

        <div className='nav__Logo flex gap-9 items-center mt-4'>
            <img src={logo} alt="" />
            <div className="flex gap-4 items-center">
                <select className='outline-none  p-2' >
                    <option className=''>Shop by category</option>
                </select>
                <div className='search flex items-center gap-2 border-2 border-black w-[610px] '>
                    <AiOutlineSearch className="text-gray-400" />
                    <h3 className="text-gray-500">Search for anything</h3>
                </div>
                <Button className="w-[169px] rounded-none" type="primary">Search</Button>
                <h2 className="text-xs text-gray-500">Advanced</h2>
            </div>
        </div>


        <div className="header mt-[53px]">
            <ul className="flex justify-between"> 
                <li><a href="#" className="text-xs">Home</a></li>
                <li className="flex items-center gap-1"> <AiFillHeart  /> <a href="#" className="text-xs">  Saved</a></li>
                <li><a href="#" className="text-xs">Motors</a></li>
                <li><a href="#" className="text-xs">Electronics</a></li>
                <li><a href="#" className="text-xs">Collectibles</a></li>
                <li><a href="#" className="text-xs">Home & Garden</a></li>
                <li><a href="#" className="text-xs">Fashion</a></li>
                <li><a href="#" className="text-xs">Toys</a></li>
                <li><a href="#" className="text-xs">Sporting Goods</a></li>
                <li><a href="#" className="text-xs">Business & Industrial</a></li>
                <li><a href="#" className="text-xs">Jewelry & Watches</a></li>
                <li><a href="#" className="text-xs">eBay Live</a></li>
                <li><a href="#" className="text-xs">Refurbished</a></li>
            </ul>
        </div>
      </Container>
      <div className=" bg-[#FEB786] mt-4">
            <Container>
                    <div className="flex justify-between">
                        <div className="header__title">
                            <h2 className="italic text-3xl w-[291px]">Super savings at the Brand Outlet</h2>
                            <p className="header__text">Up to 60% off the brands you love.</p>
                            <Button className="bg-[#FEB786] border-[#5C1B05] rounded-none">Shop now <AiOutlineArrowRight /> </Button>
                        </div>

                        <div className="flex">
                            <img src={sumka} alt="" />
                            <img src={merrell} alt="" />
                            <img src={specialized} alt="" />
                        </div>
                    </div>
            </Container>
     </div> 

      
      

     </div>
)
}

export default Header
