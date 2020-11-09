import React from 'react';
import { useState } from 'react';
import menuData from '../menuData';
import Items from './Items';
// import gif from '../../Image/Banner.gif';

const Home = () => {
    const [menu, setMenu] = useState(menuData);
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
    const handleItem =(e) =>{
        // console.log(e);
    }

    return (
        <div>
            {/* Banner */}
            <div className="banner">
                {/* <img src={gif} alt=""/> */}
            </div>
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
                        menu.map(x => 
                        <Items 
                        x={x} key={x.id} id={x.id} handleItem ={handleItem} item={x.item} pic={x.pic} price={x.price} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;