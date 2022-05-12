import React, { useEffect, useState } from 'react';
;

const Orders = () => {
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
            console.log(res);
           return res.json()
        })
        .then(data=>{
            console.log(data);
        })

    },[])

    return (
        <div>
         <h1>This is Orders page</h1>
        </div>
    );
};

export default Orders;