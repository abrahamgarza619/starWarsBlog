import React from "react";

export const CardPlanet = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">NAME</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Population: </li>
    <li class="list-group-item">Terrain: </li>
  </ul>
    <a href="#" className="btn btn-primary">learn more!</a>
  </div>
</div>
    )
}