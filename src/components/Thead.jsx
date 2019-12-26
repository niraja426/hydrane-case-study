import React from 'react'

export default function Thead(props) {
    return (
        <thead>
                        <tr>
                                <th scope="col">Continent</th>
                                <th scope="col">Country </th>
                                 {(props.areaOrPopulation==="Area" || props.areaOrPopulation===" ") && <th scope="col">Area</th>}
                                {(props.areaOrPopulation==="Population" || props.areaOrPopulation===" ") && <th scope="col">Population</th> }                              
                        </tr>
        </thead>   
    )
}
