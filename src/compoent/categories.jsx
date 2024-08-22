import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Categories = () => {
    const [data] = useFetch("/products/categories")
    console.log(data)

    
  return (
    <div>
      <div className="grid grid-cols-8">
        {
            data.slice(0, 8).map(category => 
                <div key={category.name}>
                    <Link to={"/categories"}>
                        <img src="dfghgh" alt="sdfgh" />
                        <p>{category?.name}</p>
                    </Link>
                    
                </div>)
        }
      </div>
    </div>
  )
}

export default Categories
