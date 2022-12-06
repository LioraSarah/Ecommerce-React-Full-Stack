//import './Header.css';
import React, { useEffect } from 'react';
import { NavLink, useParams, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import {
//     selectAllItems,
//     setCategorie,
// } from '../../../../features/catalogSlice';
import { addItem } from "../../../../features/cartSlice.js";
import "./ProductPage.css";

export function ProductPage() {

    let { productName } = useParams();
    const dispatch = useDispatch();
    // const catalogItemsPreview = useSelector(selectAllItems);
    // const isLoadingCatalog = useSelector(isLoading);
    const productColor = "Blue";
    const productMAterial = "100% Cotton";
    const productPrice = "$20";
    // const addOptions = function () {
    //     for (let i=2; i<=30; i++) {
    //         let select = document.getElementById("quantity");
    //         let option = document.createElement("option");
    //         select.add(option);
    //         option.text = i;
    //         option.value = i;
    //     }
    // }

    const addToCart = () => {
        dispatch(addItem(productName));
    }

    return (
        <article className="catalog-container">
            <img src={`../../../../media/${productName}.jpg`} alt={productName} className="product-img" />
            <div className="product-description">

                <h3 className="product-h3 info-section">{productName}</h3>
                <div className="description">
                    <div id="material" className="info-section">
                        <p>
                            color: {productColor}<br />
                            yarn: {productMAterial}
                        </p>
                    </div>

                    <div id="size" className="info-section">
                        <label>size:</label><br />
                        <div className="bold-option">
                            <input name="size" type="radio" value="s" /> s
                            <input name="size" type="radio" value="m" /> m
                            <input name="size" type="radio" value="l" /> l
                        </div>
                    </div>

                    <div id="quantity" className="info-section">
                        <label>quantity:</label><br />
                        <select name="quantity" id="quantity-select">
                            <option value="1">1</option>
                            {/* { addOptions() } */}
                        </select><br />
                    </div>

                    <p id="price-p">
                        price: <span id="price">{productPrice}</span>
                    </p>
                </div>

                {/* <input type="submit" value="ADD" /> */}
                <NavLink onClick={addToCart} to="/cart">
                    <button type="button" className="main-button add">add to cart</button>
                </NavLink>

            </div>

        </article>
    )

}