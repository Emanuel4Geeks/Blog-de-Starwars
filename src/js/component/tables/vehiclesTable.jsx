import React from 'react';

const VehiclesTable = ({ info }) => {
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
                        <th>Model</th>
                        <td>{info.details.model}</td>
                    </tr>
                    <tr>
                        <th>Manufacturer</th>
                        <td>{info.details.manufacturer}</td>
                    </tr>
                    <tr>
                        <th>Cost in credits</th>
                        <td>{info.details.cost_in_credits}</td>
                    </tr>
                    <tr>
                        <th>Cargo capacity</th>
                        <td>{info.details.cargo_capacity} kg</td>
                    </tr>
                    <tr>
                        <th>Max athmospher speed</th>
                        <td>{info.details.max_atmosphering_speed} km/h</td>
                    </tr>
                    <tr>
                        <th>Length</th>
                        <td>{info.details.length} meters</td>
                    </tr>
                    <tr>
                        <th>Crew</th>
                        <td>{info.details.crew}</td>
                    </tr>
                </tbody>
            </table>

            {/* Tablet/PC table */}
            <table className='d-none d-md-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Cost in credits</th>
                        <th>Cargo capacity</th>
                        <th>Max athmosphering speed</th>
                        <th>Length</th>
                        <th>Crew</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-1'>{info.name}</td>
                        <td className='p-1'>{info.details.model}</td>
                        <td className='p-1'>{info.details.manufacturer}</td>
                        <td className='p-1'>{info.details.cost_in_credits}</td>
                        <td className='p-1'>{info.details.cargo_capacity} kg</td>
                        <td className='p-1'>{info.details.max_atmosphering_speed} km/h</td>
                        <td className='p-1'>{info.details.length} meters</td>
                        <td className='p-1'>{info.details.crew}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default VehiclesTable;
