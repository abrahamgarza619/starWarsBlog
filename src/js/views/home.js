import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import {CardPeople} from '../component/CardPeople';
import {CardPlanet} from '../component/CardPlanet';

export function Home() {
	const [people, setPeople] = useState([]);
	const [planet, setPlanet] = useState([]);

	useEffect(() => {
		async function fetchPeople() {
			let res = await fetch("https://swapi.dev/api/people/");
			let data = await res.json();
			setPeople(data.results);
		}
		async function fetchPlanets() {
			let res = await fetch("https://swapi.dev/api/planets/");
			let data = await res.json();
			setPlanet(data.results);
		}
		fetchPeople();
		fetchPlanets();
	}, []);
	console.log(people);
	console.log(planet);
	return(
		<div>
			<CardPeople people={people}/>
			<CardPlanet planet={planet}/>
		</div>
	)
}


