import React from 'react';
import logo from '../../Image/logo2-light.png';
import cartLogo from '../../Image/ICON/shopping-cart.png';
import { useState } from 'react';
import menuData from '../menuData';
import Items from './Items';

const Home = () => {
    const [menu , setMenu] = useState(menuData);
    // console.log(menu);
    const handleAll = () => {
        setMenu(menuData);
        console.log("done");
    }
    const handleBreakfast = () => {

    }
    const handleLunch = () => {
        
    }
    const handleDinner = () => {
        
    }

    return (
        <div>
            {/* Navbar */}
            <div className="d-flex justify-content-between px-5 py-3">
                <img style={{ height: '50px', }} src={logo} alt="" />
                <div>
                    <img style={{ height: '50px', }} className="mx-2" src={cartLogo} alt="" />
                    <button className="btn btn-danger mx-2">Log in</button>
                    <button className="btn btn-dark mx-2">Sign Up</button>
                </div>
            </div>
            {/* Banner */}
            <div className="banner"></div>
            {/* Menu Items */}
            <div className="d-flex justify-content-center">
                <button onClick={handleAll} className="btn btn-danger mx-3 my-5">All</button>
                <button onClick={handleBreakfast} className="btn btn-danger mx-3 my-5">Breakfast</button>
                <button onClick={handleLunch} className="btn btn-danger mx-3 my-5">Lunch</button>
                <button onClick={handleDinner} className="btn btn-danger mx-3 my-5">Dinner</button>
            </div>
            <div className="container">
                <div className="row">
                {
                    menu.map(x => <Items key={x.item} item={x.item} pic={x.pic} price={x.price}></Items>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;