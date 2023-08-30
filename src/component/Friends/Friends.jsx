import React from 'react';
import {
    useLoaderData, Link, useNavigate
} from "react-router-dom";
import Friends2 from './Friends2';

const Friends = () => {

    const dataAll = useLoaderData();
    // console.log(dataAll);


    return (
        <div>
            <h1>This is friend section </h1>
            <div>
                {
                    dataAll.map((data) => <Friends2 key={data.id} data={data}></Friends2>)
                }
            </div>
        </div>
    );
};

export default Friends;