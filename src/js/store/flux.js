import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			type: { people: "Characters", planets: "Planets", vehicles: "Vehicles" },
			favourites: [],
			pageBgImage: true,
		},
		actions: {
			loadDataPersonas: async () => {
				await fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err))

				await fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({
						people: getActions().addDetails(getStore().people, data.results, "characters")
					}))
					.catch(err => console.error(err))
			},
			loadDataPlanetas: async () => {
				await fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

				await fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({
						planets: getActions().addDetails(getStore().planets, data.results, "planets")
					}))
					.catch(err => console.error(err))
			},
			loadDataVehiculos: async () => {
				await fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))

				await fetch("https://swapi.dev/api/vehicles/")
					.then(res => res.json())
					.then(data => {
						setStore({
							vehicles: getActions().addDetails(getStore().vehicles, data.results, "vehicle")
						})
					})
					.catch(err => console.error(err))
			},
			addDetails: (actualData, newData, tipo) => {

				// se asigna al objeto actual proveniente de .tech una nueva propiedad "details" 
				// para almacenar el objeto de la pagina .dev
				// .tech es la que tiene la propiedad uid y .dev no tiene una claramente definida
				return actualData.map((item) => {
					return {
						...item,
						details: newData.filter(newItem => newItem.name === item.name)[0],
						img: `https://starwars-visualguide.com/assets/img/${tipo}/${item.uid}.jpg`
					}
				}
				)
			},
			addFav: (e) => {
				const dataset = e.target.dataset

				const checkFavs = () =>
					getStore()
						.favourites
						.filter(
							item => item.name === dataset.cardNom
								&& item.type === dataset.cardTipo)
						.length === 0

				if (checkFavs()) {
					setStore({
						favourites: [...getStore().favourites, {
							name: dataset.cardNom,
							type: dataset.cardTipo,
							uid: dataset.cardUid
						}]
					})
				}
			},
			removeFav: (index) => {
				const newFav = getStore().favourites;
				newFav.splice(index, 1)
				setStore({ favourites: newFav })
			},
			showPageBgImage: (state = true) => {
				getStore().pageBgImg = state;
			}
			// changeColor: (index, color) => {
			// 	//get the store /* noe espero que no te sea muy complicado :) */
			//  // /* este era el gremlin que quería hacer */
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
