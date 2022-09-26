import React from "react";

export const CardPlanet = ( {name, population, terrain, key} ) => {
    return (
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Population: {population}</li>
    <li class="list-group-item">Terrain: {terrain}</li>
  </ul>
    <a href="#" className="btn btn-primary" key={key}>learn more!</a>
  </div>
</div>
    )
}