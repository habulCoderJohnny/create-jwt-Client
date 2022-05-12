import React from 'react';
const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px'
}

const Signup = () => {
    return (
    <div>
        <h1>Registration form</h1>
        <form style={{ width: '50%', margin: '20px auto' }}>
        <input style={inputStyle} type="email" name="email" placeholder='Email' />
        <br />
        <input style={inputStyle} type="password" name="password" placeholder='Password' />
        <br />
        <input className='btn' type="submit" value="Signup" />
        </form>
    </div>
    );
};

export default Signup;