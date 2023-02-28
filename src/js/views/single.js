import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { NotFound } from "./notFound";
import "../../styles/single.css";

import PeopleTable from "../component/tables/peopleTable.jsx";
import VehiclesTable from "../component/tables/vehiclesTable.jsx";
import PlanetsTable from "../component/tables/planetsTable.jsx";
import ImageWithFallback from "../component/ImageWithFallback.jsx";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const { section, theid } = useParams();

	actions.showPageBgImage();
	const [info] = store[section].filter(item => item.uid === theid)
	const details = info?.details

	const imageSelf = `https://starwars-visualguide.com/assets/img/${section === "people" ? "characters" : section}/${theid}.jpg`;
	let bio

	if (details?.birth_year) {
		bio = `${details.name} was born in ${details.birth_year}. ${details.name}'s gender is ${details.gender}, and ${details.name} has ${details.hair_color} hair and ${details.eye_color} eyes.`
	} else if (details?.model) {
		bio = `${details.name} is a ${details.model} produced by ${details.manufacturer}. It has a maximum speed of ${details.max_atmosphering_speed} km/h, and can carry up to ${details.crew} crew members.`
	} else if (details?.climate) {
		bio = `${details.name} is a ${details.climate} planet with ${details.terrain} terrain. It has a population of ${details.population}.`
	}

	return !store.type.hasOwnProperty(section) && info ?
		<NotFound />
		: (
			< main className="container single bg-dark text-light text-center p-4 pb-5">

				<section id="description" className="row">
					<ImageWithFallback key={section + theid} imageUrl={info?.img || imageSelf} classList="col-12 col-md-5 mx-auto w-md-50" alt={"Image of " + info?.name} />
					<article className="col-12 col-md-7 mx-auto">
						<h1>{info?.name}</h1>
						<p>{bio}</p>
					</article>
				</section>
				<section id="tables" className="row mt-5 mx-1">
					{details?.birth_year && <PeopleTable info={info} />}
					{details?.model && <VehiclesTable info={info} />}
					{details?.climate && <PlanetsTable info={info} />}
				</section>
			</main >
		);
};