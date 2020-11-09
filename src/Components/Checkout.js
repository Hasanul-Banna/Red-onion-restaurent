import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../storageManager';
import Cart from './Cart';
import menuData from './menuData';
import rider from '../Image/Rider.gif';

const Checkout = () => {
    const [gif , setGif] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const savedKeys = Object.keys(savedCart);
        const AddedCart = savedKeys.map(itemId => {
            const CartItems = menuData.find(x => x.id === itemId);
            CartItems.quantity = savedCart[itemId];
            return CartItems;
        })
        setCart(AddedCart);
    }, [setCart]);

    const removeItem = (e) => {
        const newCart = cart.filter(p => p.id !== e);
        setCart(newCart);
        removeFromDatabaseCart(e);
    }
    const placeOrder = () => {
        processOrder();
        setCart([]);
        setGif(true);
    }
    const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
    const VAT = total / 10;
    const tip = total * .05;
    const GrandTotal = total + VAT + tip;
    return (
        <div className="container mt-5">
            <div className="row">
                {gif && <div className="col-md-6 px-5">
                    <img id="rider" className="w-100" src={rider} alt=""/>
                    </div>}
                {!gif && <div className="col-md-6 px-5">
                    <h3>Delivery details</h3> <hr />
                    <input type="text" className="form-control" placeholder="Your location area"/>  <br />
                    <input type="text" className="form-control" placeholder="Flat/Street no"/> <br />
                    <input type="text" className="form-control" placeholder="Phone number"/> <br />
                    <textarea className="form-control" rows="3" placeholder="Special instructions..."></textarea> <br />
                    {total !== 0 ? <button  onClick={placeOrder} className="btn btn-danger w-100">Place order</button> :
                    <button disabled onClick={placeOrder} className="btn btn-danger w-100">Place order</button>}
                </div>}
                <div className="col-md-6 px-5">
                    <h3>Order details</h3> <hr />
                    {
                        cart.map(x => <Cart removeItem={removeItem} item={x}></Cart>)
                    }
                    <p>Sub total : ${total}</p>
                    <p>VAT (10%) : ${VAT}</p>
                    <p>Delivery-charge (5%) : ${tip}</p>
                    <p>Grand total : ${GrandTotal}</p>
                   { gif && <button className="btn btn-danger">Order again?</button>}
                </div>
            </div>
        </div>
    );
};

export default Checkout;