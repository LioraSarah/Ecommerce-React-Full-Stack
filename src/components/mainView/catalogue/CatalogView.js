import React, { useEffect } from 'react';
import { NavLink, useParams, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllItems,
  setCategorie,
} from '../../../features/catalogSlice';
import "./CatalogueView.css";

export function CatalogueView() {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategorie({ category: category }));
  }, [dispatch, category]);

  const catalogItemsPreview = useSelector(selectAllItems);

  function handleMouseOver(e) {
    e.target.nextSibling.className = "visible-hover";
  }

  function handleMouseLeave(e) {
    e.target.nextSibling.className = "hidden-hover";
  }

  return (
    <article id="catalogue-container">
      <h3 id="category-h3">{category}</h3>
      <div className="catalogue-view">
        {catalogItemsPreview.map((item) => (
          <div key={item.id} className="catalogue-view-item">
            <NavLink className="link" activeclassname="link-active" to={`/catalogue/${category}/${item.name}`}>
              <img src={`../../../media/${item.image}.jpg`} alt={item.name} className="itemImg"
                onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}></img>
              <div className="hidden-hover">
                <p className="view-p">view</p>
                {/* <button className="hidden-button" >add to cart</button> */}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </article>
  );

}