import React, { Component, useContext } from "react";
import { Context } from "../../../store/appContext";

export const Vehicle = (props) => {
	const { store } = useContext(Context);

	const details = store?.vehicles.filter((item) => item.uid == props.id)[0]?.details

	return (<>
		<p className="card-text m-0">Vehicle class: {details?.vehicle_class} </p>
		<p className="card-text m-0">Cargo capacity: {details?.cargo_capacity &&
			details?.cargo_capacity.concat(details?.cargo_capacity === "none" ? "" : " kg")
		} </p>
		<p className="card-text m-0">Crew: {details?.crew} </p>
		<p className="card-text m-0">Passengers: {details?.passengers} </p>
	</>)
}
