import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';

const PeopleTable = ({ info }) => {

    const { store } = useContext(Context)
    const [planetLink, setPlanetLink] = useState("")


    async function fetchPlanetName() {
        const planetId = info.details.homeworld.split("/")[5];
        const planet = store.planets.filter(item => item.uid === planetId)
        if (planet) {
            const res = await fetch(`https://swapi.tech/api/planets/${planetId}`)
            const data = await res.json()
            data.result.properties.name && setPlanetLink(<Link to={"/planets/" + planetId}>{data.result.properties.name}</Link>)
        } else {
            planet.name && setPlanetLink(<Link to={"/planets/" + planetId}>{planet.name}</Link>)
        }
    }

    useEffect(() => {
        fetchPlanetName()
    }, [info.details.homeworld])

    return (
        <>

            {/* Mobile table */}
            <table className='d-table d-md-none'>
                <tbody >
                    <tr>
                        <th>Name</th>
                        <td>{info.name}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{info.details.gender}</td>
                    </tr>
                    <tr>
                        <th>Birth year</th>
                        <td>{info.details.birth_year}</td>
                    </tr>
                    <tr>
                        <th>Hair color</th>
                        <td>{info.details.hair_color}</td>
                    </tr>
                    <tr>
                        <th>Eye color</th>
                        <td>{info.details.eye_color}</td>
                    </tr>
                    <tr>
                        <th>Dimensions</th>
                        <td>{info.details.height} cm</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>{info.details.mass} kg</td>
                    </tr>
                    <tr>
                        <th>Homeworld</th>
                        <td>{planetLink}</td>
                    </tr>
                    <tr>
                        <th>Films</th>
                        <td>{info.details.films.length}</td>
                    </tr>
                </tbody>
            </table>

            {/* Tablet/PC table */}
            <table className='d-none d-md-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth year</th>
                        <th>Hair color</th>
                        <th>Eye color</th>
                        <th>Dimensions</th>
                        <th>Weight</th>
                        <th>Homeworld</th>
                        <th>Films</th>
                    </tr>
                </thead>
                <tbody className='mt-5'>
                    <tr>
                        <td className='p-1'>{info.name}</td>
                        <td className='p-1'>{info.details.gender}</td>
                        <td className='p-1'>{info.details.birth_year}</td>
                        <td className='p-1'>{info.details.hair_color}</td>
                        <td className='p-1'>{info.details.eye_color}</td>
                        <td className='p-1'>{info.details.height} cm</td>
                        <td className='p-1'>{info.details.mass} kg</td>
                        <td className='p-1'>{planetLink}</td>
                        <td className='p-1'>{info.details.films.length}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default PeopleTable;