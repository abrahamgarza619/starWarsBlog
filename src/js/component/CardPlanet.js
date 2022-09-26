import React from "react";
import { Link } from "react-router-dom";

export const CardPlanet = ( {name, population, terrain, key} ) => {
    return (
<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Population: {population}</li>
    <li className="list-group-item">Terrain: {terrain}</li>
  </ul>
  <Link className="btn btn-primary" to={name}>learn more!</Link>
  </div>
</div>
    )
}