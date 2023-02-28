import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";

import { Character } from "./typeCard/character.jsx";
import { Planet } from "./typeCard/planet.jsx";
import { Vehicle } from "./typeCard/vehicle.jsx";
import ImageWithFallback from "../ImageWithFallback.jsx";

export const Card = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card bg-dark text-light border-success" style={{ width: "18rem" }}>
            <ImageWithFallback classList="card-img-top mt-2" alt={props.nombre + " image"}
                imageUrl={`https://starwars-visualguide.com/assets/img/${props.tipo === "people"
                    ? "characters"
                    : props.tipo}/${props.id}.jpg`} />
            <div className="card-body row align-items-end">
                <div className="p-0">
                    <h5 className="card-title">{props.nombre}</h5>
                    {(props.tipo === "people") ?
                        <Character id={props.id} />
                        : props.tipo === "planets"
                            ? <Planet id={props.id} />
                            : <Vehicle id={props.id} />}
                    <p className="w-100">
                        <span className="px-2 mt-2 row justify-content-between">
                            <Link to={`${props.tipo}/${props.id}`} className="btn btn-primary col-6">More details</Link>
                            <button className="btn btn-outline-warning far fa-heart col-2"
                                onClick={(e) => { actions.addFav(e) }}
                                data-card-nom={props.nombre}
                                data-card-tipo={props.tipo}
                                data-card-uid={props.id}></button>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
