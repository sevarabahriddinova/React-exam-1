import React from 'react'

const Nav = () => {
  return (
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
  )
}

export default Nav
