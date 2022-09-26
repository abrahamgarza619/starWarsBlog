import React from "react";
import { Link } from "react-router-dom";

export const CardPeople = ({ name, person, gender, hair_color, eye_color, key }) => {
    return (
        <div className="card" style={{width: "18rem"}} key={key}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Gender: {gender}</li>
    <li className="list-group-item">Hair color: {hair_color}</li>
    <li className="list-group-item">Eye color: {eye_color}</li>
  </ul>
  <Link className="btn btn-primary" to={name}>learn more!</Link>
  </div>
</div>
    )
}