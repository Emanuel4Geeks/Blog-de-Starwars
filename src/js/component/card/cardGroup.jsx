import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

import { Card } from "./card.jsx";

export const CardGroup = (props) => {
	const { store } = useContext(Context);

	return (
		<section className="container mt-5">
			<h2 className="text-danger mb-3 fs-1 fw-bolder">{store.type[props.tipo]}</h2>
			<div className="row overflow-auto flex-nowrap gap-4">
				{store[props.tipo].map((item, i) =>
					<Card key={i} tipo={props.tipo} nombre={item.name} id={item.uid} />
				)}
			</div>
		</section>
	);
};
