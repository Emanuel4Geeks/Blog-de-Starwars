import React from 'react';

const PlanetsTable = ({ info }) => {

    return <>
        {/* Mobile table */}
        <table className='d-table d-md-none'>
            <tbody >
                <tr>
                    <th>Name</th>
                    <td>{info.name}</td>
                </tr>
                <tr>
                    <th>Climate</th>
                    <td>{info.details.climate}</td>
                </tr>
                <tr>
                    <th>Terrain</th>
                    <td>{info.details.terrain}</td>
                </tr>
                <tr>
                    <th>Rotation period</th>
                    <td>{info.details.rotation_period} hours</td>
                </tr>
                <tr>
                    <th>Orbital period</th>
                    <td>{info.details.orbital_period} days</td>
                </tr>
                <tr>
                    <th>Surface Water</th>
                    <td>{info.details.surface_water}</td>
                </tr>
                <tr>
                    <th>Population</th>
                    <td>{info.details.population}</td>
                </tr>
                <tr>
                    <th>Charecters Residents</th>
                    <td>{info.details.residents.length}</td>
                </tr>
            </tbody>
        </table>

        {/* Tablet/PC table */}
        <table className='d-none d-md-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Rotation period</th>
                    <th>Orbital period</th>
                    <th>Surface water</th>
                    <th>Population</th>
                    <th>Characters Residents</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='p-1'>{info.name}</td>
                    <td className='p-1'>{info.details.climate}</td>
                    <td className='p-1'>{info.details.terrain}</td>
                    <td className='p-1'>{info.details.rotation_period} hours</td>
                    <td className='p-1'>{info.details.orbital_period} days</td>
                    <td className='p-1'>{info.details.surface_water}</td>
                    <td className='p-1'>{info.details.population}</td>
                    <td className='p-1'>{info.details.residents.length}</td>
                </tr>
            </tbody>
        </table>
    </>


};

export default PlanetsTable;
