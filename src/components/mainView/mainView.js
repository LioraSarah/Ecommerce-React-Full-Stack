import React from 'react';
import { WelcomePage } from "./welcomePage.js";
import { CatalogueView } from "./catalogue/CatalogView.js";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./catalogue/productPage/ProductPage.js";
import { Cart } from "./cart/cart.js";
import "./mainView.css";

export const MainView = () => {

    return (
        <section id="main-section">
            <Routes>
                <Route path="/*" element={<WelcomePage/>} />
                <Route path="/catalogue/:category/*"
                    element={<CatalogueView />} />
                <Route path={"/catalogue/:category/:productName"}
                    element={<ProductPage />} />
                <Route path={"/cart"}
                    element={<Cart />} />
            </Routes>
        </section>
    )
}