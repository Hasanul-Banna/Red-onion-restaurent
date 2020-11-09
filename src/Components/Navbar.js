import React, { useContext } from 'react';
import logo from '../Image/logo2-light.png';
import cartLogo from '../Image/ICON/shopping-cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

const Navbar = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div className="d-flex justify-content-between px-5 py-3">
            <Link to="/home"> <img style={{ height: '50px', }} src={logo} alt="" /> </Link>
            <div>
                <Link to="/checkout"> <span>
                    <img style={{ height: '40px', }} className="mx-2" src={cartLogo} alt="" />
                    <small>{cart.length}</small>
                </span> </Link>
                <button className="btn btn-danger mx-2">Log in</button>
                <button className="btn btn-dark mx-2">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;