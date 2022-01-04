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
        axios.post('https://shielded-refuge-42801.herokuapp.com/photos', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
    };
    return (
        <div>
            <h2 className="mt-5 text-center text-primary fw-bold">Add Photos of your Shop</h2>
            <div className="admin-banner m-auto mt-3">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form front-bg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="m-2 p-2" placeholder="Photo title" {...register("name", { required: true })} /><br />

                            <input className="m-3 p-2" placeholder="Photo URL" {...register("img")} />
                            <br />

                            <textarea className="m-3 p-2" placeholder="Description" {...register("description")} /><br />

                            <button className="btn border-2 border-success rounded-pill">Add Photo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPhoto;