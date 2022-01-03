import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import './Home.css';
import styled, { keyframes } from 'styled-components';
import { pulse, flash } from 'react-animations';
import img_1 from '../../images/1.png';
import img_2 from '../../images/2.png';
import img_3 from '../../images/3.png';
import img_4 from '../../images/4.png';
import about_1 from '../../images/aboutUs1.jpg';
import about_2 from '../../images/aboutUs2.jpg';
import about_3 from '../../images/aboutUs3.png';
import about_4 from '../../images/aboutUs4.png';
import about_5 from '../../images/5.jpg';
import about_6 from '../../images/6.png';
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import InstaPic from "../InstaPic/InstaPic";
import Product from "../Product/Product";
import useProducts from "../../hooks/useProducts";

const flashAnimation = keyframes`${flash}`;
const FlashDiv = styled.div`
  animation: infinite 3s ${flashAnimation};
`;

const PulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: infinite 5s ${PulseAnimation};
`;

const Home = () => {

    const [products] = useProducts();

    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('photoGallery.json')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])

    const [insta, setInsta] = useState([])
    useEffect(() => {
        fetch('instagram.json')
            .then(res => res.json())
            .then(data => setInsta(data));
    }, [])

    return (
        <div>

            <div className="section-1 box">
                <div className="text-start px-md-5 mx-md-5 banner-detail">
                    <PulseDiv>
                        <h1 className="mx-5 special1">Would you like a Cup of Delicious Coffee?</h1>
                    </PulseDiv>
                    <h1 className="mx-5 special2">Would you like a Cup of Delicious Coffee?</h1>
                    <h2 className="mt-4 mx-5">Coffee Time - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</h2>
                    <br /><br />
                    <a href="#learnMore"><button className="mx-5 px-5 btn home-banner-btn">Learn More</button></a>
                </div>
            </div>

            <div className="section-2 box p-5">
                <div className="py-3 container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_1} alt="" />
                            </div>
                            <h2 className="mt-4">Awesome Aroma</h2>
                            <p>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_2} alt="" />
                            </div>
                            <h2 className="mt-4">High Quality</h2>
                            <p>We served the coffee to you maintaining the best quality for you</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_3} alt="" />
                            </div>
                            <h2 className="mt-4">Pure Grades</h2>
                            <p>The coffee is made of the green coffee beans which you will love</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_4} alt="" />
                            </div>
                            <h2 className="mt-4">Proper Roasting</h2>
                            <p>Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section-3 my-5">
                <div className="py-3 container">
                    <div className="row">
                        <div className="col-12 col-lg-4 text-start pe-5">
                            <p>About Us</p>
                            <h1>There is all about Coffee house</h1>
                            <p>Coffee Time is serving for you from the previous 10 years. We care for you, for your test with our hospitality. You will have a great time with us. </p>
                            <div className="row mt-5 mb-4">
                                <div className="col-12 col-md-2">
                                    <img src={about_3} alt="" />
                                </div>
                                <div className="col-12 col-md-10">
                                    <h2>Best Facility</h2>
                                    <p>Have your coffee with full refreshment, enjoy the moment.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <img src={about_4} alt="" />
                                </div>
                                <div className="col-12 col-md-10">
                                    <h2>Resoanable Price</h2>
                                    <p>You will get in a resonable price. Your happiness add a value for us.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 about-img-container">
                            <img className="about-img-2 img-fluid" src={about_2} alt="" />
                            <img className="about-img-1 img-fluid" src={about_1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-4 mb-5">
                <div className="d-flex justify-content-between">
                    <div className="about-bottom">
                        <img className="about-img-3 img-fluid" src={about_5} alt="" />
                        <img className="about-img-4 img-fluid" src={about_6} alt="" />
                        <h2 className="text-end mt-3">Fine Quality & Ecological</h2>
                    </div>
                    <div className="w-50 ms-3 px-5 d-flex align-items-center">
                        <h1>Let's enjoy the day together! Spend a quality time with Coffee Time...</h1>
                    </div>
                </div>
            </div>

            <div className="section-5">
                <p>Our Special Menu</p>
                <h1>Photo Gallery</h1>
                <div className="gallery-container container-fluid">
                    <Row xs={1} md={3}>
                        {
                            photos.map(gallery => <Gallery
                                key={gallery.id}
                                gallery={gallery}
                            ></Gallery>)
                        }
                    </Row>
                </div>
            </div>

            <div className="section-6 my-3 py-5">
                <p>Testimonial</p>
                <h1>What Our Clints Says</h1>
                <Reviews></Reviews>
            </div>

            <div id="learnMore" className="products section-7">
                <div className="d-flex justify-content-between container">
                    <div className="text-start">
                        <p>Special Online Shop</p>
                        <h1>Our Popular Products</h1>
                    </div>
                    <div>
                        <button className="btn3">See All Products</button>
                    </div>
                </div>
                <div className="product-container container my-5">
                    <Row xs={1} md={3}>
                        {
                            products.slice(0, 3).map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                </div>
            </div>

            <div className="container-fluid section-8 mb-5">
                <p>Follow Us Now</p>
                <h1>Follow on Instagram</h1>
                <Row xs={1} md={4}>
                    {
                        insta.map(pic => <InstaPic
                            key={pic.id}
                            pic={pic}
                        ></InstaPic>)
                    }
                </Row>
            </div>

        </div>
    )
}

export default Home;