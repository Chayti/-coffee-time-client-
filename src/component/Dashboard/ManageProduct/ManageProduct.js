import axios from "axios";
import React, { useEffect, useState } from "react";
import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://coffee-time-server3.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])

    const handleDelete = (id) => {
        const url = `https://coffee-time-server3.vercel.app/products/${id}`
        const ans = window.confirm('Do you want to delete it?')
        if (ans) {
            axios
                .delete(url)
                .then(data => {
                    // console.log(data)
                    if (data.acknowledged) {
                        alert('Deleted')
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div >
            <h2 className="fw-bold py-5 admin-text">--Manage Products--</h2>
            {
                products.map(product => <div key={product._id}>

                    <div className=" my-order d-flex flex-column justify-content-between m-4 px-4 py-3 border-2 border-primary rounded-pill w-75 mx-auto">
                        <h3 className="fw-bold order-name" style={{ display: "inline" }}>{product.name}</h3>
                        <div className="d-md-flex justify-content-center">
                            <div>
                                <button className="fw-bold ms-0 btn rounded-pill" style={{
                                    border: "3px solid #331a15",
                                    backgroundColor: "#d2b48c",
                                    color: "#331a15"
                                }} onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;
