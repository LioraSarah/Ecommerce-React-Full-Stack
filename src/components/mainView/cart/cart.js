import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from "react-router-dom";
// import {
//   selectAllItems,
//   isLoading
// } from '../../../features/catalogSlice';
import { selectCartItems } from "../../../features/cartSlice";
import { loadCart, removeItem } from "../../../features/cartSlice.js";
import "./cart.css";

export const Cart = () => {

  const dispatch = useDispatch();
  const catalogItemsPreview = useSelector(selectCartItems);
  console.log(catalogItemsPreview);
  // const isLoadingCatalog = useSelector(isLoading);

    useEffect(() =>{
      dispatch(loadCart());
      console.log(catalogItemsPreview);}
    , [dispatch, catalogItemsPreview]);

  const handleClick = (e) => {
    //console.log(e.target.name);
    dispatch(removeItem(e.target.name));
  }

  return (
    <article className="cart-container">
      <h3>cart</h3>
      <div id="cart-cont">
        <ul id="cart-view">
          {catalogItemsPreview.map((item, index) => (
            <li className="cart-view-item" key={index}>
              <img src={`../../../media/${item}.jpg`} alt={item} className="cart-item-img" />
              <div className="info">
                <NavLink className='link' to="">
                  <h4>{item}</h4>
                </NavLink>
                <p className='info-p'>size: { }<br />
                  quantity: { }<br />
                  price: { }
                </p>
              </div>

              <button className="remove-button" onClick={handleClick} name={item}>
                remove
              </button>
            </li>
          ))}
        </ul>
        <h5 id="total">total: { }</h5>
        <div className="main-button checkout-btn">check out</div>
      </div>
    </article>
  )
