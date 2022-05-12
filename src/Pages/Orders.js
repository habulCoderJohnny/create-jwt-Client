import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate =  useNavigate();
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        //OPTION Async/axios/fetch | token sent to server
        fetch('http://localhost:5000/orders',{
            method: 'GET',
            headers: {
                authorization:
                `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            // console.log(res);
            if (res.status === 401 || res.status === 403) {
                navigate('/login');
                
            }
           return res.json()
        })
        .then(data=>{
            console.log(data);
            setOrders(data);
        })
    },[])

    return (
        <div>
         <h1>Your Orders item:  {orders.length}</h1>
        </div>
    );
};

export default Orders;