import React, { useEffect, useState } from 'react'
import { ProductButton } from '../components/buttons/ProductButton';
import { useDispatch, useSelector } from "react-redux";
import { PopupActions } from '../store/slices/Popup';
import Modal from 'react-bootstrap/Modal';
import { ProductActions } from '../store/slices/Product';

export const Shop = () => {
    document.body.style = 'background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(123,222,21,1) 100%);height:100%';
    const [productData, setproductData] = useState(null)
    const Product = useSelector((state) => state.product.products);
    const Popup = useSelector((state) => state.popup.popupState);
    const dispatch = useDispatch();   
    const handleClose = () => {
        dispatch(PopupActions.changeState())

    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            mode: 'cors',
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setproductData(data));
    }, [])

    return (
        <div className='container-fluid'>
            <div className='product-wrapper justify-content-evenly mt-5 mb-5'>
                {productData != null ? (productData.map(e => {
                    return <div key={e.id} ><ProductButton data0={e.id} data1={e.title} data2={e.price}></ProductButton></div>
                })) : null}
            </div>
            <Modal show={Popup} onHide={handleClose}>
                <Modal.Header className="bg-opacity-75 bg-success" closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <form >
                    <Modal.Body>
                       {Product.map(e =>{
                           return  <div key={e.id} className="row mb-2">
                           <div className='col-9 d-flex justify-content-start align-items-center'>{e.title}({e.price}$)</div>
                           <div className='col-3 d-flex justify-content-end align-items-center'><button onClick={(b)=>{b.preventDefault();dispatch(ProductActions.remove(e.id));}} className="btn btn-danger">Remove</button></div>
                       </div>
                       })
                               
                            }
                  
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn btn-success">
                            Purchase
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
