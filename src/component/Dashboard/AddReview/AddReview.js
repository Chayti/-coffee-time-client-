import React from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        console.log(data);
        axios.post('https://coffee-time-server3.vercel.app/addReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for your review!')
                    reset()
                }
            })
    };
    return (
        <div className="user-review-banner">
            <h2 className="text-center admin-text pt-5 fw-bold" style={{ color: "#d2b48c" }}>Please Add Your review</h2>
            <div className=" m-auto">
                <div className="border border d-flex justify-content-center align-items-center">
                    <div className="login-form front-bg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="m-2 p-2"
                                name="name"
                                placeholder="Your Name"
                                {...register("name", { required: true })}
                            />
                            <br />

                            <input
                                className="m-3 p-2"
                                placeholder="Your Photo"
                                {...register("img")}
                            />

                            <br />
                            <input
                                className="m-2 p-2"
                                placeholder="Designation"
                                {...register("designation", { required: true })}
                            /><br />

                            <textarea
                                className="m-3 p-2"
                                placeholder="Comments"
                                {...register("comments")}
                            /><br />


                            <button style={{
                                border: "3px solid #a88d67",
                                backgroundColor: "#d2b48c",
                                color: "#331a15"
                            }} className="btn border-2 rounded-pill">Add Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;