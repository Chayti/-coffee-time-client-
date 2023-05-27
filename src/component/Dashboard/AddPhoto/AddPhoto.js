import React from 'react';
import './AddPhoto.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from '../../../hooks/useAuth';

const AddPhoto = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        console.log(data);
        axios.post('https://coffee-time-server3.vercel.app/photos', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
    };
    return (
        <div className="admin-banner">
            <h2 className="pt-5 text-center fw-bold admin-text">Add Photos of your Shop</h2>
            <div className=" m-auto mt-3">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form front-bg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="m-2 p-2" placeholder="Photo title" {...register("name", { required: true })} /><br />

                            <input className="m-3 p-2" placeholder="Photo URL" {...register("img")} />
                            <br />

                            <textarea className="m-3 p-2" placeholder="Description" {...register("description")} /><br />

                            <button style={{
                                border: "3px solid #a88d67",
                                backgroundColor: "#d2b48c",
                                color: "#331a15"
                            }} className="btn border-2 border-success rounded-pill">Add Photo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPhoto;