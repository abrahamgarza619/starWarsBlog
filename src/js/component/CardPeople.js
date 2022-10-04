import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const CardPeople = ({ name, person, gender, hair_color, eye_color, key, id }) => {
    const { actions } = useContext(Context);
    return (
        <div className="card" style={{width: "18rem"}} key={key}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Gender: {gender}</li>
    <li className="list-group-item">Hair color: {hair_color}</li>
    <li className="list-group-item">Eye color: {eye_color}</li>
    <button type="button" onClick={() => actions.setFavorite(person)}>Click Me!</button>
  </ul>
  <Link className="btn btn-primary" to={`/single/${id}`}>learn more!</Link>
  </div>
</div>
    )
}