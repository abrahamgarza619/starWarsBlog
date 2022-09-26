import React from "react";

export const CardPeople = ({ name, person, gender, hair_color, eye_color, key }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Gender: {gender}</li>
    <li class="list-group-item">Hair color: {hair_color}</li>
    <li class="list-group-item">Eye color: {eye_color}</li>
  </ul>
    <a href="#" className="btn btn-primary" key={key} >learn more!</a>
  </div>
</div>
    )
}