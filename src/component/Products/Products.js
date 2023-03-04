import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <Header></Header>
            <div id="learnMore" className="products section-7 my-0">
                <div className="d-flex justify-content-between container">
                    <div className="text-start">
                        <p>Coffee Time Available</p>
                        <h1>Our Products</h1>
                    </div>
                </div>
                <div className="product-container container">
                    <Row xs={1} md={3}>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                </div>
            </div>
            <hr style={{ height: "2em" }} />
            <Footer></Footer>
        </div>
    )
}

export default Products;