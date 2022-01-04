import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, description, img, price } = product;
    return (
        <div className="product py-4">
            <img className="m-3" src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="d-flex justify-content-between mt-5 price">
                <h4 className="px-3">${price}</h4>
                <Link to={`/product/${_id}`}>
                    <button className="btn2 mx-3 rounded">Buy Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Product;