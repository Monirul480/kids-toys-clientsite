import React from 'react';
import Navbar from '../Pages/Home/Shared/Navbar/Navbar';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import {Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div className='lg:mx-10 border'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;