import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import React from 'react'
import Container from '../utils'

const Footer = () => {
  return (
    <div>
      <Container>

    
      < hr className="mt-[47px]" />
        <div className="flex justify-between mt-[57px]">
          <ul className='flex flex-col gap-4'>
            <li><a href="#" className='italic text-[#767676] font-bold'>Buy</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Registration</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>eBay Money Back Guarantee</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Bidding & buying help</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Stores</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>eBay for Charity</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Charity Shop</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Seasonal Sales and events</a></li>
          </ul>

          <ul className='flex flex-col gap-4'>
            <li><a href="#" className='italic text-[#767676] font-bold'>Sell</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Start selling</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>How to sell</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Business sellers</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Affiliates</a></li>
            <li><a href="#" className='italic text-[#767676] font-bold'>Tools & apps</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Developers</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Security center</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Site map</a></li>
          </ul>


          <ul className='flex flex-col gap-4'>
            <li><a href="#" className='italic text-[#767676] font-bold'>Sell</a></li>
            <li><a href="#" className='text-[11px] flex items-center gap-1 text-[#767676]'> <AiFillFacebook /> Facebook</a></li>
            <li><a href="#" className='text-[11px] flex items-centergap-1 text-[#767676]'> <AiFillTwitterSquare /> Twitter</a></li>
          </ul>


          <ul className='flex flex-col gap-4'>
            <li><a href="#" className='italic text-[#767676] font-bold'>About eBay</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Company info</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>News</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Investors</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Careers</a></li>
            <li><a href="#" className='italic text-[#767676] font-bold'>Diversity & Inclusion</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Global Impact</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Advertise with us</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Policies</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Verified Rights Owner (VeRO) Program</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>eCI</a></li>
          </ul>


          <ul className='flex flex-col gap-4'>
            <li><a href="#" className='italic text-[#767676] font-bold'>Help & Contact</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Seller Center</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Contact Us</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>eBay Returns</a></li>
            <li><a href="#" className='italic text-[#767676] font-bold'>Community</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>Announcements</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>eBay Community</a></li>
            <li><a href="#" className='text-[11px] text-[#767676]'>eBay for Business Podcast</a></li>
            <li><a href="#" className='italic text-[#767676] font-bold'>eBay Sites</a></li>
          </ul>

        </div>
      </Container>
    </div>
  )
}

export default Footer
