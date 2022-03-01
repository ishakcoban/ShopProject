import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductActions } from '../../store/slices/Product';
export const ProductButton = (props) => {
  const dispatch = useDispatch();
  
  return (
    <div className='btn-wrapper d-flex flex-column align-items-center justify-content-between p-4'>
      <div>{props.data1}</div>
      <div>{props.data2}$</div>
      <button onClick={()=>{
        dispatch(ProductActions.add({id:props.data0,title:props.data1,price:props.data2}))}
      } className='btn btn-success'>Add to Cart</button>
    </div>
  )
}
