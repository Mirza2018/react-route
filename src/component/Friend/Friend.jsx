import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const Friend = () => {
    const friend = useLoaderData();
    const { name, username, email, address, phone, company } = friend;
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>This is friend datiels</h1>
            <h2>Name: {name}</h2>
            <h3>User name: {username}</h3>
            <h4>Email: {email}</h4>
            <h5>Address: {address.city}</h5>
            <p>Phone:{phone}</p>
            <p>Company name:{company.name}</p>
            <button onClick={handleGoBack}>Go back</button>

        </div>
    );
};

export default Friend;