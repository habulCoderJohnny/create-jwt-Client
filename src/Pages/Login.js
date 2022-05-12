import React from 'react';
import './Login.css';
const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px'
}
const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email , password);

        //DATA POST
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }) 
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <form onSubmit={handleLogin} style={{ width: '50%', margin: '20px auto' }}>
        <input style={inputStyle} type="email" name="email" placeholder='Email' />
        <br />
        <input style={inputStyle} type="password" name="password" placeholder='Password' />
        <br />
        <input className='btn' type="submit" value="Login" />
    </form>
    );
};

export default Login;