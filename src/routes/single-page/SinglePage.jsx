import { AiOutlineHeart } from "react-icons/ai"; 
import "./Single.css"
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.jsx";
import Container from "../../compoent/container/Container.jsx";

import { Button, Flex } from 'antd';

const SinglePage = () => {
    const productId = useParams()
    const [data, loading] = useFetch(`/products/${productId.id}`)

    return (
        <Container>

            <div className="wrapper">
                <div className="w-full">
                    <div className="">
                        <h2 className="flex  font-bold text-gray-700">EXTRA <span className="text-red-600 font-bold flex">$10</span> OFF 3+ ITEMS WITH CODE <span className="text-red-600">10OFF2023TECH</span></h2>
                        {/* <span className="text-blue-700">See all eligible items and terms</span> */}
                    </div>
                    <div className="single-img">
                        <img src={data.thumbnail} alt={data.title} />
                    </div>
                </div>

                <div className="card-body single-body">
                    <h2>{data.title}</h2>
                    <hr className="bg-gray-900 font-bold" />
                     <div className="flex gap-4">
                     <p className="">Condition:</p>
                     <div className="">
                        <span className="font-bold text-[20px]">Open box</span>
                        <div className="">
                        <p className="desc single-desc">"{data.description}" </p>
                        <span className="text-blue-700">Read more</span>
                        </div>
                     </div>
                     </div>
                     <div className="flex items-center mt-4">
                        <h4 className="text-[14px] w-[70px]">Model :</h4>
                        <h4 className="apple">Apple iPhone 11</h4>
                     </div>
                     <div className="flex items-center gap-2 mt-4">
                        <h4 className="text-[14px] w-[60px]">Carrier:</h4>
                        <h4 className="apple">Xfinity Locked</h4>
                     </div>
                     
                     <div className="flex items-center gap-2 mt-4">
                        <h4 className="text-[14px] w-[60px]">Storage <br /> Capacity:</h4>
                        <h4 className="apple">Xfinity Locked</h4>
                     </div>

                     <div className="flex items-center mt-4">
                        <h4 className="text-[14px] w-[70px]">Color:</h4>
                        <h4 className="apple">Black</h4>
                     </div>
                     
                     <div className="flex items-center mt-4">
                        <h4 className="text-[14px] w-[70px]">Cosmetic:</h4>
                        <h4 className="apple">Heavy Use</h4>
                     </div>
                     
                     <div className="flex items-center mt-4">
                        <h4 className="text-[14px] w-[70px]">Quantity:</h4>
                        <h4 className="border w-[30px] border-gray-500 text-center bg-gray-300">1</h4>
                        <span className="text-red-600 pl-3">Last One / 86 sold</span>
                     </div>
                     <hr  className="mt-4 bg-gray-950" />
                    
                    <div className="flex gap-3 mt-2">
                        <h4>Price:</h4>
                        <div>
                            <b>US ${data.price} </b>
                            <h5 className="text-blue-600 mt-2">No Interest if paid in full in 6 <br /> mo on $99+*</h5>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button type="primary" className="rounded-xl w-[230px]"> Buy It Now</Button>
                            <Button type="primary" className="rounded-xl w-[230px] bg-blue-400"> Add to cart</Button>
                            <Button className="text-blue-500 rounded-xl border-blue-900 border-2  "> <AiOutlineHeart /> Add to Watchlist</Button>

                        </div>
                    </div>
                 </div>
            </div>
        </Container>
    )
}
export default SinglePage
