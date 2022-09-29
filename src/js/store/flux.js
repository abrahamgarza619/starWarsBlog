const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			planets: [
				{
					name: 'hello'
				}
			],
			people: [
				{
					name: 'hello'
				}
			]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				async function fetchPeople() {
					let res = await fetch("https://swapi.dev/api/people/");
					let data = await res.json();
					setStore({"people": data.results});
				}
				async function fetchPlanets() {
					let res = await fetch("https://swapi.dev/api/planets/");
					let data = await res.json();
					setStore({"planets": data.results});
				}
				fetchPeople();
				fetchPlanets();
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
