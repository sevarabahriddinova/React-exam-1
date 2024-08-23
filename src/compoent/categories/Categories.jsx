import "./Categories.css"
import Container from "../container/Container.jsx";
import {NavLink} from "react-router-dom";
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
import img7 from "../../assets/img7.png"

const Categories = () => {
    return (
        <Container>
            <div className="category">
                <ul>
                    <li>
                        <img src={img1  } alt="" />
                        <NavLink to="/tops"> Dress </NavLink>
                    </li>
                    
                    <li>
                        <img src={img2} alt="" /> 
                        <NavLink to="/beauty"> Beauty </NavLink>
                    </li>
                   
                    <li>
                        <img src={img6} alt="" />
                        <NavLink to="/fragrances"> Fragrances </NavLink>
                    </li>
                    
                    <li>
                        <img src={img3} alt="" />
                        <NavLink to="/furniture"> Furniture </NavLink>
                    </li>
                    <li>
                        <img src={img4} alt="" /> 
                        <NavLink to="/groceries"> Groceries </NavLink>
                    </li>
                    <li>
                        <img src={img5} alt="" />
                        <NavLink to="/laptops"> Laptops </NavLink>
                    </li>
                
                </ul>
            </div>
        </Container>
    )
}
export default Categories
