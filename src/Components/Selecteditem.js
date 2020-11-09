import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDatabaseCart } from '../storageManager';
import menuData from './menuData';

const Selecteditem = () => {
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const plus = () => {
        setCount(count + 1);
        // addToDatabaseCart(id, count);
    }
    const minus = () => {
        count !==0 && setCount(count - 1);
        // addToDatabaseCart(id, count);
    }
    const addToCart = () => {
         addToDatabaseCart(id, count);
    }
    const item = menuData.find(x => x.id === id);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <br /><br />
                    <h1>{item.item}</h1> <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus assumenda cumque provident, deserunt perferendis! Reiciendis esse architecto, nemo blanditiis veritatis corporis laudantium unde cumque ut pariatur repellat animi et.</p>
                    <span style={{ fontSize: "30px", fontWeight: "600", marginRight: "15px" }} className="text-danger">${item.price}</span>
                    <div className="rounded-pill count" style={{ border: "1px solid lightgray", display: "inline-block" }}> <span onClick={minus}>-</span>
                        <span>{count}</span>
                        <span onClick={plus}>+</span> </div> <br />  <br />
                    <button onClick={addToCart} className="btn btn-danger rounded-pill">Add to cart</button>
                </div>
                <div className="col-md-6">
                    <img className="w-100" src={require(`../Image/Menu/${item.pic}`)} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Selecteditem;