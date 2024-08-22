import { AiOutlineArrowRight } from "react-icons/ai"; 
import React from 'react'
import Container from '../utils'

import ebay from "../assets/ebay.svg"
import section from "../assets/section.png"
import section2 from "../assets/section2.png"
import { Button } from 'antd';


const Section = () => {
  return (
    <div>
      <Container>
        <div className="flex ">
            <div className='content__title py-[20px] px-[24px] w-[452px] border'>
                <p className='text-[11px] text-gray-700'>Featured</p>
                <img className="mt-4" src={ebay} alt="" />
                <p className='italic text-[20px] mt-6'>Deals made easy all year long.</p>
                <p className='text-gray-700 mt-2'>Free shipping. Best prices.</p>
                <Button className="rounded-none mt-2">Get your thing<AiOutlineArrowRight /> </Button>
            </div>
            <div className="flex gap-4">
                <img src={section} alt="" />
                <img src={section2} alt="" />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Section
