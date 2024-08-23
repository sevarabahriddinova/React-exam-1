 import {useLocation} from "react-router-dom";
import {useFetch} from "../../../hooks/useFetch.jsx";
import Products from "../../../compoent/products/Products.jsx";
import {Skeleton} from "antd";
import React from "react";
import Nav from "../../../compoent/Nav.jsx";

const Beauty = () => {
    const path = useLocation()

    const [data, loading] = useFetch(`/products/category${path.pathname}`)

    return (
        <div className="mt-10 ">
            
            
        <div className="cards grid grid-cols-5 gap-4">
            {
                loading ?
                    Array.from({ length: 9 }).map((item, index) => (
                        <div className="skeloton" key={index}>
                            <Skeleton.Image  active className="skeloton_img" style={{ width: "350px" , height: "350px"}} />
                            <Skeleton.Input active className="skeloton_input" style={{ width: "350px" , height: "20px", marginBlock: "20px"}} />
                            <Skeleton.Input active className="skeloton_input" style={{ width: "350px" , height: "80px"}} />
                            <Skeleton.Input active className="skeloton_input" style={{ width: "350px" , height: "20px"}} />
                            <Skeleton.Input active className="skeloton_input" style={{ width: "150px" , height: "30px"}} />

                        </div>
                    )) :
                    data?.products?.map(product =>
                        <Products key={product.id} product={product}/>
                    )
            }
        </div>
        </div>
    )
}
export default Beauty
