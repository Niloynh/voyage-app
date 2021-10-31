import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddANewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        axios.post('http://localhost:5000/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your New Order Added successfully')
                reset();
            }
            
        })
    
    
    }
    return (
        <div className="handleForm">
            <h2 className="text-center text-info my-5 text-uppercase">Please add a New Order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("tour", { required: true, maxLength: 20 })} placeholder="Tour"/>
            <input type="number" {...register("price")} placeholder="Price"/>
            <input type="number" {...register("rate")} placeholder="Rate"/>
            <input {...register("description")} placeholder="Description"/>
            <input {...register("valid")} placeholder="Valid"/>
            <input {...register("img")} placeholder="Image URL"/>
            <input className="input-btn mb-5" type="submit" value="Add New Order"/>
            </form>
        </div>
    );
};

export default AddANewService;