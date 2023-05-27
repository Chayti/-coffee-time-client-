import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://coffee-time-server3.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])

    return (
        <div className="text-center my-5 reviews-bg">
            <Carousel fade>
                {
                    reviews.map(review =>
                        <Carousel.Item className="d-flex justify-content-center" key={review._id}>
                            <div className="review py-4 carousel-width front-bg">
                                <img className="my-2 rounded-circle" src={review.img} alt="" />
                                <h3 className="pt-3 pb-0 mb-0 fw-bold">{review.name}</h3>
                                <h5 className="pt-0 pb-3">{review.designation}</h5>
                                <p className="fst-italic px-3 fw-bold"> {review.comments}</p>
                            </div>
                        </Carousel.Item>
                    )
                }

            </Carousel>
        </div>
    );
}

export default Reviews;