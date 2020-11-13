import React from 'react';
import { useState } from 'react';
import menuData from '../menuData';
import Items from './Items';
import logo from '../../Image/logo-dark.png';
import gif2 from '../../Image/gifs/Banner.gif';
import card2 from '../../Image/gifs/card2.gif';
import card3 from '../../Image/gifs/card3.gif';
import chkn from '../../Image/gifs/chkn.gif';

const Home = () => {
    const [menu, setMenu] = useState(menuData.slice(0, 6));
    // console.log(menu);
    const handleAll = () => {
        setMenu(menuData);
        console.log("done");
    }
    const handleBreakfast = () => {
        const breakfast = menuData.filter(y => y.category === "breakfast");
        // console.log(breakfast);
        setMenu(breakfast);
    }
    const handleLunch = () => {
        const lunch = menuData.filter(y => y.category === "lunch");
        // console.log(lunch);
        setMenu(lunch);
    }
    const handleDinner = () => {
        const dinner = menuData.filter(y => y.category === "dinner");
        // console.log(dinner);
        setMenu(dinner);
    }
    const handleItem = (e) => {
        // console.log(e);
    }

    return (
        <div>
            {/* Banner */}
            <div className="banner text-center pt-5">
                <h1>Best food is waiting for your stomach!</h1>
                <img className="m-5" style={{ height: "250px", width: "400px", borderRadius: "10px" }} src={gif2} alt="" />
                {/* <img style={{height:"250px",width:"350px"}} src={gif2} alt="" /> */}
            </div>
            {/* Menu Items */}
            <div className="d-flex justify-content-center">
                <button onClick={handleAll} className="btn mixbtn btn-danger mx-3 my-5">All</button>
                <button onClick={handleBreakfast} className="btn mixbtn btn-danger mx-3 my-5">Breakfast</button>
                <button onClick={handleLunch} className="btn mixbtn btn-danger mx-3 my-5">Lunch</button>
                <button onClick={handleDinner} className="btn mixbtn btn-danger mx-3 my-5">Dinner</button>
            </div>
            <div className="container"> <hr />
                <div className="row">
                    {
                        menu.map(x =>
                            <Items
                                x={x} key={x.id} id={x.id} handleItem={handleItem} item={x.item} pic={x.pic} price={x.price} />)
                    }
                </div> <hr />
            </div>
            <div className="container text-center">
                <h2 className="m-5">Why Choose Us</h2>
                <div className="row">
                    <div className="col-md-4 ">
                        <img style={{ borderRadius: "10px" }} className="w-100" src={chkn} alt="" />
                        <h4 >Healthy food</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsam nulla sit maxime. Inventore, vero.</p>
                    </div>
                    <div className="col-md-4">
                        <img style={{ borderRadius: "10px" }} className="w-100" src={card3} alt="" />
                        <h4 >Live kitchen</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsam nulla sit maxime. Inventore, vero.</p>
                    </div>
                    <div className="col-md-4">
                        <img style={{ borderRadius: "10px" }} className="w-100" src={card2} alt="" />
                        <h4 >Expert chefs</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsam nulla sit maxime. Inventore, vero.</p>
                    </div>
                </div>
            </div>
            <footer className="container-fluid mt-5  text-white">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-6">
                            <img style={{ height: '50px', marginBottom:'65px'}} src={logo} alt="" />
                            <p className="text-light"> &copy; All rights reserved by Hasanul_Banna</p>
                        </div>
                        <div className="col-md-3">
                            <p>About Red Onion</p>
                            <p>Read our blog</p>
                            <p>Refund policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                        <div className="col-md-3">
                            <p>FAQ</p>
                            <p>Help</p>
                            <p>Support</p>
                            <p> Pricing</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;