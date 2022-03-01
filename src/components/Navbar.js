import React from 'react'
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { PopupActions } from '../store/slices/Popup';

export const Navbar = () => {
    const myProducts = useSelector((state) => state.product.products)
    const dispatch = useDispatch();
    const popupHandler = ()=>{
        dispatch(PopupActions.changeState())

    }
    return (
        <div className='container-fluid'>
            <div className='navbar-wrapper'>
                <div className='row navbar-bg'>
                    <div to='/' className='col-6'><NavLink to='/'><img className='logo-img p-2 ms-2' src={logo}></img></NavLink></div>
                    <div className='col-6 d-flex justify-content-evenly align-items-center'>
                        <NavLink to="/" className="each-link">Home</NavLink>
                        <NavLink to="/Shop" className="each-link">Shop</NavLink>
                        <div onClick={popupHandler} to="/Drawings" className="each-link position-relative d-flex align-items-center justify-content-center ">
                            <div className='position-absolute'>Chart</div>
                            {myProducts.length == 0 ? null : <div className='position-absolute chart-circle d-flex justify-content-center align-items-center'>{myProducts.length}</div>}</div>

                    </div>
                </div>


            </div>


        </div>
    )
}
