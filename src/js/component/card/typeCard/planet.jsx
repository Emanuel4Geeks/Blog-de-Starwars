import React, { Component, useContext } from "react";
import { Context } from "../../../store/appContext";

export const Planet = (props) => {
const { store } = useContext(Context);

	const details = store?.planets.filter((item) => item.uid == props.id)[0]?.details


	return (<>
		<p className="card-text m-0">Population: {details?.population}</p>
		<p className="card-text m-0">Terrain: {details?.terrain}</p>
		<p className="card-text m-0">Rotation period: {details?.rotation_period} hours</p>
	</>)
}
