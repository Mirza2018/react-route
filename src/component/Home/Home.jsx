import React from 'react';
import {
    Outlet, useNavigation
} from "react-router-dom";
import Header from '../Header/Header';
import App from '../../App';

const Home = () => {

    const navigation=useNavigation()
    return (
        <div>
            <Header></Header>
            <h3>This is Home.</h3>
            {
                navigation.state==='loading'&&'loding--'
            }
            <Outlet></Outlet>  
        </div>
    );
};

export default Home;