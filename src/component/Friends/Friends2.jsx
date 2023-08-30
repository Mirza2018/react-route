import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friends2 = ({data}) => {
    
    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate(`/friend/${data.id}`)
    }
    return (
        <div>
            <h1>Name: {data.name}</h1>
                            <p>
                                <Link to={`/friend/${data.id}`}>
                                    See datils
                                </Link>
                            </p>
             <button onClick={handleNavigate}>Go details</button>
        </div>
    );
};

export default Friends2;