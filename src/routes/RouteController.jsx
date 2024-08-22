import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './auth/Login'
import Home from './home/Home'
import SinglePage from '../routes/single-page/SinglePage'
import Categories from '../compoent/categories/Categories'
// import All from "../routes/home/all/All"
import Tops from "../routes/home/tops/Tops"
import Beauty from "../routes/home/beauty/Beauty"
import Fragrances from "../routes/home/fragrances/Fragrances"
import Furniture from "../routes/home/furniture/Furniture"
import Groceries from "../routes/home/groceries/Groceries"
import Laptops from "../routes/home/laptops/Laptops"


const RouteController = () => {
  return (
    <div>
      <Routes>
            <Route path="" element= {<Home/>} />
            {/* <Route index path="" element={<All/>}/> */}
                    <Route path="/tops" element={<Tops/>}/>
                    <Route path="/beauty" element={<Beauty/>}/>
                    <Route path="/fragrances" element={<Fragrances/>}/>
                    <Route path="/furniture" element={<Furniture/>}/>
                    <Route path="/groceries" element={<Groceries/>}/>
                    <Route path="/laptops" element={<Laptops/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/singlePage" element={<SinglePage/>}/>
             <Route path='/categories' element={<Categories/>}/>
             <Route path="/single/:id" element={<SinglePage/>} />
      </Routes>
    </div>
  )
}

export default RouteController
 