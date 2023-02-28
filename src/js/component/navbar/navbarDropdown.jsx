import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export const NavbarDropdown = (props) => {
  const { store, actions } = useContext(Context);

  return (<div className="dropdown">
    <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Favorites <span className="badge rounded-pill text-bg-secondary bg-secondary">{store.favourites.length}</span>
    </button>
    <ul id="listFav" className="dropdown-menu dropdown-menu-end row overflow-auto flex-nowrap gap-4">
      {
        store.favourites.length > 0
          ? store.favourites.map((item, index) =>
            <li key={item.name + item.uid} className="btn-outline-primary dropdown-item d-flex justify-content-between align-items-center">
              <Link className="text-info" to={`${item.type}/${item.uid}`}>{item.name}
              </Link>
              <i className="btn btn-outline-danger fas fa-trash-alt ms-3" onClick={e=>{actions.removeFav(index)}}></i>
            </li>
          )
          : <li key={0}><em>(empty)</em></li>}
    </ul>
  </div>)
}
