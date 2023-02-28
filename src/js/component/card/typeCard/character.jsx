import propTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const Character = (props) => {
	const { store } = useContext(Context);

	const details = store?.people.filter((item) => item.uid == props.id)[0]?.details;

	return (<>
		<p className="card-text m-0">Gender: {details?.gender}</p>
		<p className="card-text m-0">Hair Color: {details?.hair_color}</p>
		<p className="card-text m-0">Eye-Color: {details?.eye_color}</p>
	</>)
}
