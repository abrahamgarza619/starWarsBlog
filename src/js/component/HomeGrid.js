import React, { useContext } from "react";
import { CardPeople } from "./CardPeople";
import { CardPlanet } from "./CardPlanet";
import { v4 as uuidv4 } from 'uuid';
import { Context } from "../store/appContext";

export const HomeGrid = () => {
    const tiendita = useContext(Context);
	const planets = tiendita.store.planets;
	const people = tiendita.store.people;
    return(
        <div>
            {people.map((person, i) => {
                return (
                    <CardPeople name={person.name} gender={person.gender} key={uuidv4()} hair_color={person.hair_color} eye_color={person.eye_color} person={person} />
                )
            })}
            <input type="range" class="form-range" id="customRange1"></input>
            {planets.map((planet, i) => {
                return (
                    <CardPlanet name={planet.name} terrain={planet.terrain} population={planet.population} key={uuidv4()} />
                )
            })}
        </div>
    )
}