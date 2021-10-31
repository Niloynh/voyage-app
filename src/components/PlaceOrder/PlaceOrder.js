import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';


const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        axios.post('http://localhost:5000/order', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order Processed successfully')
                reset();
            }
            
        })
    
    
    }

    return (
        <div className="handleForm">
            <h2 className="text-center text-info my-3 text-uppercase">Please add a Order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("tour", { required: true, maxLength: 20 })} placeholder="Tour"/>
            <input type="number" {...register("price")} placeholder="Price"/>
            <input type="number" {...register("rate")} placeholder="Rate"/>
            <input {...register("description")} placeholder="Description"/>
            <input {...register("valid")} placeholder="Valid"/>
            <input {...register("img")} placeholder="Image URL"/>
            <input className="input-btn" type="submit" value="Order Now"/>
            </form>
        </div>
    );
};

export default PlaceOrder;