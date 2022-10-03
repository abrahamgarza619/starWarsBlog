import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const CardPlanet = ( {name, population, terrain, key} ) => {
    const { actions } = useContext(Context);

    return (
<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Population: {population}</li>
    <li className="list-group-item">Terrain: {terrain}</li>
    <button type="button" onClick={() => actions.setFavorite(person)}>Click Me!</button>
  </ul>
  <Link className="btn btn-primary" to={name}>learn more!</Link>
  </div>
</div>
    )
}