import React from 'react'
import { useContext } from 'react'
import ProjectStore from '../../context/store'
import Header from '../../compoent/Header'
import Section from '../../compoent/Section'
// import Products from '../../compoent/Products'
import Footer from '../../compoent/Footer'
import Categories from '../../compoent/categories/Categories.jsx'
import { Outlet } from 'react-router-dom'
import Product from '../../compoent/Product.jsx'

const Home = () => {
    const data = useContext(ProjectStore)
    // console.log(data)
    return (
        <div>
          <Header/>
          <div>
                <Categories/>
                <Outlet/>
            </div>
          <Section/>
          <Product/>
          <Footer/>
         
        </div>
    )
}

export default Home