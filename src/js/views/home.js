import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { HomeGrid } from "../component/HomeGrid";
export function Home() {
	const [people, setPeople] = useState([]);
	const [planets, setPlanet] = useState([]);

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
	console.log(planets);
	return(
		<div>
			<HomeGrid people={people} planets={planets}/>
		</div>
	)
}


