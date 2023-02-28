import React, { useContext, useState } from "react";
import "../../styles/home.css";

import { CardGroup } from "../component/card/cardGroup.jsx";
import { Context } from "../store/appContext";

export const Home = (props) => {
	const {actions} = useContext(Context)
	const [elements, setElements] = useState(["people", "planets", "vehicles"]);

        actions.showPageBgImage();

	return (
		<main className="container my-5 pb-5">
			{elements.map((item, i) => <CardGroup key={i} tipo={item} />)}
		</main>
	);
}
