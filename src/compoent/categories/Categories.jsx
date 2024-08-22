import "./Categories.css"
import Container from "../container/Container.jsx";
import {NavLink} from "react-router-dom";

const Categories = () => {
    return (
        <Container>
            <div className="category">
                <ul>
                    <li>
                        
                        <NavLink to="/tops"> Dress </NavLink>
                        </li>
                    <li><NavLink to="/beauty"> Beauty </NavLink></li>
                    <li><NavLink to="/fragrances"> Fragrances </NavLink></li>
                    <li><NavLink to="/furniture"> Furniture </NavLink></li>
                    <li><NavLink to="/groceries"> Groceries </NavLink></li>
                    <li><NavLink to="/laptops"> Laptops </NavLink></li>
                
                </ul>
            </div>
        </Container>
    )
}
export default Categories
